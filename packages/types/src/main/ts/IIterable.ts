/** @module @qiwi/substrate-types */
/** */

export interface IIteratorResult {
  value: any,
  done: boolean
}

export interface IIterator {
  next(): {
    value: any,
    done: boolean
  }
}

export interface IIterable {
  [Symbol.iterator](): IIterator
}
