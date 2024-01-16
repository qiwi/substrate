const fs = require('node:fs')
const path = require('node:path')
const { sync: replaceSync } = require('replace-in-file')
const {src, dst} = require('yargs')(process.argv.slice(2)).argv
const SRC = path.resolve(src || './src/main/ts/export.ts')
const DST = path.resolve(dst || './src/main/ts/aliases.ts')

fs.copyFileSync(SRC, DST)

const reserved = [
  'Stack',
  'Promise',
  'PromiseConstructor',
  'Function'
].map(v => new RegExp(`^${v}(?:,|\\n|\\s)`))

replaceSync({
  files: [DST],
  from: /((I|T|A|S)[A-Z]\w+(?:,|\n|\s))/g,
  to: match => {
    const first = match.charAt(0)
    const rest = match.slice(1)
    const prefixMap = {
      A: 'Abstract',
      S: 'Std' // https://stackoverflow.com/questions/43055682/relationship-between-a-typescript-class-and-an-interface-with-the-same-name/43056090
    }
    const prefix = prefixMap[first] || ''
    const alias = `${prefix}${rest}`

    if (reserved.find(r => r.test(rest))){
      return ''
    }

    return `${match.slice(0, -1)} as ${alias}`
  }
})
