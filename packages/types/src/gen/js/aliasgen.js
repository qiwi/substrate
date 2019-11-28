import { copySync } from 'fs-extra'
import { sync as replaceSync } from 'replace-in-file'
import { resolve } from 'path'

const SRC = resolve(__dirname, '../../main/ts/types.ts')
const DST = resolve(__dirname, '../../main/ts/aliases.ts')

copySync(SRC, DST)

replaceSync({
  files: [DST],
  from: /((I|T)\w+(?:,|\n|\s))/gi,
  to: match => `${match.slice(0, -1)} as ${match.slice(1)}`
})
