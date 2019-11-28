import { copySync } from 'fs-extra'
import { sync as replaceSync } from 'replace-in-file'
import { resolve } from 'path'
import { argv } from 'yargs'

const {src, dst} = argv
const SRC = resolve(src || './src/main/ts/types.ts')
const DST = resolve(dst || './src/main/ts/aliases.ts')

copySync(SRC, DST)

replaceSync({
  files: [DST],
  from: /((I|T|A)\w+(?:,|\n|\s))/gi,
  to: match => {
    const alias = match.charAt(0) === 'A'
      ? `Abstract${match.slice(1)}`
      : match.slice(1)

    return `${match.slice(0, -1)} as ${alias}`
  }
})
