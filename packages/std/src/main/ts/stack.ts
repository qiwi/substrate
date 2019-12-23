/** @module @qiwi/substrate-std */
/** */

import {IStack} from '@qiwi/substrate-types'

/**
 * Standard stack implementation
 */
export class Stack<T> implements IStack<T> {

  private _storage: Array<T>
  constructor(...args: Array<T>) {
    // super(...args)
    this._storage = [...args]
  }

  get(index: number | string): T | undefined {
    return this._storage[+index]
  }

  push(...items: Array<T>): T {
    this._storage.push(...items)

    return items[items.length - 1]
  }

  pop(): T | undefined {
    return this._storage.pop()
  }

  shift(): T | undefined {
    return this._storage.shift()
  }

  unshift(...items: Array<T>): T {
    this._storage.unshift(...items)

    return items[0]
  }

  get size(): number {
    return this._storage.length
  }

  remove(index: number | string): T {
    const idx = +index
    const found = this._storage[+idx]

    this._storage.splice(idx, 1)

    return found
  }

  last(): any {
    return this._storage[this.size - 1]
  }

  first(): any {
    return this._storage[0]
  }

  toArray(): Array<any> {
    return [...this._storage]
  }

  clear(): void {
    this._storage.length = 0
  }

  indexOf(item: any): number {
    return this._storage.indexOf(item)
  }

  add(index: number | string, item: T): T {
    this._storage[+index] = item

    return item
  }

  isEmpty(): boolean {
    return this.size !== 0
  }

}
