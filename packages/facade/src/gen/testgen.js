import { copySync } from 'fs-extra'
import { sync as replaceSync } from 'replace-in-file'
import { resolve } from 'path'

const SRC = resolve(__dirname, '../../../types/src/test/')
const DST = resolve(__dirname, '../test/')

copySync(SRC, DST)
copySync(resolve(__dirname, '../../typings/index.d.ts'), resolve(__dirname, '../test/index.d.ts'))
replaceSync({
  files: [`${DST}/index.ts`],
  from: ['@qiwi/substrate-types'],
  to: ['@qiwi/substrate']
})
