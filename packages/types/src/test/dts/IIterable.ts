import { IIterable, IIterator, IIteratorResult } from '.'

const iteratorResult: IIteratorResult = {
  done: false,
  value: 'foo',
}

const iterator: IIterator = {
  next () {
    return iteratorResult
  },
}

const iterable: IIterable = {
  [Symbol.iterator] () {
    return iterator
  },
}

const brokenIteratorResult: IIteratorResult = {
  // @ts-expect-error
  done: 'false',
  value: 'foo',
}

const brokenIterator: IIterator = {
  // @ts-expect-error
  next () {
    return 'foo'
  },
}

const brokenIterable: IIterable = {
  // @ts-expect-error
  [Symbol.iterator] () {
    return 'foo'
  },
}
