import { IMoney } from '.'

const brokenMoney: IMoney = {
  value: 123,
  // @ts-expect-error
  toString () {
    return 123
  },
}

// @ts-expect-error
const brokenMoney2: IMoney = {
  currency: 'bar',
}

const brokenMoney3: IMoney = {
  // @ts-expect-error
  value: 'foo',
  // @ts-expect-error
  currency: 123,
}

const brokenMoney4: IMoney = {
  // @ts-expect-error
  value: {},
  currency: 'bar',
}

const money: IMoney = {
  value: 123,
  currency: 'RUB',
  toString () {
    return this.value.toString()
  },
}
