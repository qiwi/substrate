// NOTE flowgen completely ignores module imports
// So we need this dirty hack

import {readFileSync, writeFileSync} from 'fs'
import {resolve} from 'path'
import {each} from 'lodash'
import { argv } from 'yargs'
import assert from 'assert'
import {sync as replaceSync} from 'replace-in-file'

const {flow, dts} = argv
const DTS = resolve(dts)
const FLOW = resolve(flow)
const IMPORT_MAIN_PATTERN = /\timport main = require\('(.+)'\);/g
const IMPORT_ALL_LINE_PATTERN = /^\texport \* from '(.+)';$/
const IMPORT_MAIN_LINE_PATTERN = /^\timport main = require\('(.+)'\);$/
const IMPORT_DEPS_LINE_PATTERN = /^\timport { (.+) } from '(.+)';$/

assert(!!flow &&!!dts, '`flow` and `dts` file paths should be specified')

const options = {
  files: DTS,
  from: [IMPORT_MAIN_PATTERN, '\texport = main;'],
  to: [line => {
    const [, name] = IMPORT_MAIN_LINE_PATTERN.exec(line)
    return `	export * from '${name}';`
  }, ''],
}

const changes = replaceSync(options);
console.log('Modified files:', changes.join(', '));

const dtsFile = readFileSync(DTS, 'utf-8')
const flowFile = readFileSync(FLOW, 'utf-8')

let flowOut = flowFile


const tree = dtsFile
  .split('declare module')
  .reduce((m, v, k) => {
    if (v) {
      const [first, ...lines] = v.split('\n')
      const name = first.replace(/[^@a-z\d\-\/]/g, '')
      const imports = lines
        .reduce((res, line) => {
          if (IMPORT_DEPS_LINE_PATTERN.test(line)) {
            const [, rawdeps, name] = IMPORT_DEPS_LINE_PATTERN.exec(line)
            const deps = rawdeps.split(', ')

            const types = deps.filter(d => /^(I|T)[A-Z].+/.test(d))
            const vars = deps.filter(d => !types.includes(d))

            res.push({
              types,
              vars,
              deps,
              name
            })
          }

          if (IMPORT_MAIN_LINE_PATTERN.test(line)) {
            const [, name] = IMPORT_MAIN_LINE_PATTERN.exec(line)

            res.push({ name })
          }

          if (IMPORT_ALL_LINE_PATTERN.test(line)) {
            const [, name] = IMPORT_ALL_LINE_PATTERN.exec(line)

            res.push({ name })
          }

          return res
        }, [])
      const exports = lines.filter(line => /^\texport/.test(line))

      m[name] = {
        imports,
        exports
      }
    }

    return m
  }, {})

each(tree, ({imports}, name) => {
  if (imports && imports.length) {
    each(imports, ({deps, name: from}) => {
      const inject = deps
        ? `  import type { ${deps.join(', ')} } from "${from}"`
        : `  declare export * from "${from}"`

      flowOut = flowOut.replace(`declare module "${name}" {`, `declare module "${name}" {
${inject}
`)
    })
  }
})

flowOut = flowOut.replace(/(\s)*declare module.exports: typeof main;/g, '')

writeFileSync(FLOW, flowOut, 'utf-8')
