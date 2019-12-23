import { Stack } from '../../../main/ts'

describe('stack', () => {
  describe('constructor', () => {
    it('returns proper instance', () => {
      const stack = new Stack()

      expect(stack).toBeInstanceOf(Stack)
    })
  })

  describe('proto', () => {
    const stack = new Stack()

    describe('#push', () => {
      it('push adds new item to stack', () => {
        expect(stack.push('bar')).toBe('bar')
      })

      it('appends several items and returns the lasr', () => {
        expect(stack.push('baz', 'qux')).toBe('qux')
      })
    })

    describe('#first', () => {
      it('returns the first element', () => {
        expect(stack.first()).toBe('bar')
      })
    })

    describe('#last', () => {
      it('returns the last element', () => {
        expect(stack.last()).toBe('qux')
      })
    })

    describe('#get', () => {
      it('gets item by index', () => {
        expect(stack.get(0)).toBe('bar')
      })

      it('gets undefined if not found', () => {
        expect(stack.get(1000)).toBeUndefined()
      })
    })

    describe('#shift', () => {
      it('returns the first stack item', () => {
        expect(stack.shift()).toBe('bar')
        expect(stack.get(0)).toBe('baz')
      })
    })

    describe('#unshift', () => {
      it('prepends items to the beginning of stack', () => {
        expect(stack.unshift('pre', 'item')).toBe('pre')
        expect(stack.get(0)).toBe('pre')
      })
    })

    describe('#pop', () => {
      it('returns the last stack item', () => {
        expect(stack.pop()).toBe('qux')
      })
    })

    describe('#size', () => {
      it('returns current stack size', () => {
        expect(stack.size).toBe(3)
      })
    })
  })
})
