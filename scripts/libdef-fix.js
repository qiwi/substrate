
import {resolve} from 'path'
import { argv } from 'yargs'
import assert from 'assert'
import {sync as replaceSync} from 'replace-in-file'

const {flow, dts} = argv
const DTS = resolve(dts)
const IMPORT_MAIN_PATTERN = /\timport main = require\('(.+)'\);/g
const IMPORT_MAIN_LINE_PATTERN = /^\timport main = require\('(.+)'\);$/
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
