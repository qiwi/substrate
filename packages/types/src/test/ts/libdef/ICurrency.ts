import { ICurrency } from '.'

const brokenCurrency: ICurrency = 123 // $ExpectError
const brokenCurrency2: ICurrency = {} // $ExpectError
const currency: ICurrency = 'foo'
