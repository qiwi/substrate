import { IIterable, IIteratorResult, IIterator } from './index'

const iteratorResult: IIteratorResult = {
  done: false,
  value: 'foo'
}

const iterator: IIterator = {
  next() {
    return iteratorResult
  }
}

const iterable: IIterable = {
  [Symbol.iterator] () {
    return iterator
  }
}

const brokenIteratorResult: IIteratorResult = {
  done: 'false', // $ExpectError
  value: 'foo'
}

const brokenIterator: IIterator = {
  next() { return 'foo' } // $ExpectError
}

const brokenIterable: IIterable = { // $ExpectError
  [Symbol.iterator] () {
    return 'foo'
  }
}
