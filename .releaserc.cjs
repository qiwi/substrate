module.exports = {
  buildCmd: 'yarn build',
  testCmd: 'yarn test',
  npmFetch: true,
  tagFormat: 'pure',
  meta: 'asset',
  ghAssets: [
    {name: 'lcov.info', source: './coverage/lcov.info'},
  ]
}
