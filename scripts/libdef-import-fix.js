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
const REDUNDANT_DECLARE_EXPORT = /([\r\n\t\s]+)export ([^*{\t;]+[;{])/gi
const BROKEN_MODULE_NAME = /(declare module '.+\/lib\/es5\/)[^/]*\/src\/main\/index'.+/
const REFERENCE = /\/\/\/.+/

assert(!!flow &&!!dts, '`flow` and `dts` file paths should be specified')

const options = {
  files: DTS,
  from: [
    '\texport = main;',
    IMPORT_MAIN_PATTERN,
    BROKEN_MODULE_NAME,
    REDUNDANT_DECLARE_EXPORT,
    REFERENCE,
    /^\s*[\r\n]/gm
  ],
  to: [
    '',
    line => {
      const [, name] = IMPORT_MAIN_LINE_PATTERN.exec(line)
      return `	export * from '${name}';`
    },
    line => {
      const [, module] = BROKEN_MODULE_NAME.exec(line)
      return `${module}index' {`
    },
    line => {
      REDUNDANT_DECLARE_EXPORT.lastIndex = 0
      const [, indent, declaration] = REDUNDANT_DECLARE_EXPORT.exec(line)

      return `${indent}${declaration}`
    },
    '',
    ''
  ],
}

const changes = replaceSync(options);
console.log('Modified files:', changes.join(', '));

const dtsFile = readFileSync(DTS, 'utf-8')
const flowFile = readFileSync(FLOW, 'utf-8')

let flowOut = flowFile

const replaceByPattern = (pattern, line, res) => {
  if (pattern.test(line)) {
    const [, name] = pattern.exec(line)

    res.push({ name })
  }
}

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

          replaceByPattern(IMPORT_MAIN_LINE_PATTERN, line, res)
          replaceByPattern(IMPORT_ALL_LINE_PATTERN, line, res)

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
