import { IMoney } from '.'

const brokenMoney: IMoney = {
  value: 123,
  toString () { // $ExpectError
    return 123
  },
}

const brokenMoney2: IMoney = { // $ExpectError
  currency: 'bar',
}

const brokenMoney3: IMoney = {
  value: 'foo', // $ExpectError
  currency: 123, // $ExpectError
}

const brokenMoney4: IMoney = {
  value: {}, // $ExpectError
  currency: 'bar',
}

const money: IMoney = {
  value: 123,
  currency: 'RUB',
  toString () {
    return this.value.toString()
  },
}
