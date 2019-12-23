import { copySync } from 'fs-extra'
import { sync as replaceSync } from 'replace-in-file'
import { resolve } from 'path'
import { argv } from 'yargs'

const {src, dst} = argv
const SRC = resolve(src || './src/main/ts/export.ts')
const DST = resolve(dst || './src/main/ts/aliases.ts')

copySync(SRC, DST)

const reserved = ['Promise', 'PromiseConstructor'].map(v => new RegExp(`^${v}(?:,|\\n|\\s)`))

replaceSync({
  files: [DST],
  from: /((I|T|A)[A-Z]\w+(?:,|\n|\s))/g,
  to: match => {
    const sliced = match.slice(1)

    if (reserved.find(r => r.test(sliced))){
      return ''
    }

    const alias = match.charAt(0) === 'A'
      ? `Abstract${sliced}`
      : sliced

    return `${match.slice(0, -1)} as ${alias}`
  }
})
