import { ICurrency } from '.'

// @ts-expect-error
const brokenCurrency: ICurrency = 123
// @ts-expect-error
const brokenCurrency2: ICurrency = {}
const currency: ICurrency = 'foo'
