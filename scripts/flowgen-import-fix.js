// NOTE flowgen completely ignores module imports
// So we need this dirty hack

import {readFileSync, writeFileSync} from 'fs'
import {resolve} from 'path'
import {each} from 'lodash'
import { argv } from 'yargs'
import assert from 'assert'

const {flow, dts} = argv
const DTS = resolve(dts)
const FLOW = resolve(flow)

assert(!!flow &&!!dts, '`flow` and `dts` file paths should be specified')

const dtsFile = readFileSync(DTS, 'utf-8')
const flowFile = readFileSync(FLOW, 'utf-8')
let out = flowFile

const IMPORT_MAIN_PATTERN = /^\timport main = require\('(.+)'\);$/
const IMPORT_DEPS_PATTERN = /^\timport { (.+) } from '(.+)';$/

const tree = dtsFile
  .split('declare module')
  .reduce((m, v, k) => {
    if (v) {
      const [first, ...lines] = v.split('\n')
      const name = first.replace(/[^@a-z\d\-\/]/g, '')
      const imports = lines
        .reduce((res, line) => {
          if (IMPORT_DEPS_PATTERN.test(line)) {
            const [, rawdeps, name] = IMPORT_DEPS_PATTERN.exec(line)
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

          if (IMPORT_MAIN_PATTERN.test(line)) {
            const [, name] = IMPORT_MAIN_PATTERN.exec(line)

            res.push({
              name
            })
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
        : `  export * from "${from}"`

      out = out.replace(`declare module "${name}" {`, `declare module "${name}" {
${inject}
`)
    })
  }
})

out = out.replace(/(\s)*declare module.exports: typeof main;/g, '')

writeFileSync(FLOW, out, 'utf-8')
