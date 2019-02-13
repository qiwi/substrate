import { sync as copySync } from 'cp-file'
import { sync as replaceSync } from 'replace-in-file'
import { resolve } from 'path'

const SRC = resolve(__dirname, '../../../types/src/test/index.ts')
const DST = resolve(__dirname, '../test/index.ts')

copySync(SRC, DST)
copySync(resolve(__dirname, '../../typings/index.d.ts'), resolve(__dirname, '../test/index.d.ts'))
replaceSync({
  files: [DST],
  from: ['@qiwi/substrate-types'],
  to: ['@qiwi/substrate']
})
