import { IAnyMap } from '.'

const anyMap1: IAnyMap = {
  one: 1,
}

const anyMap2: IAnyMap = {
  1: 'two',
}

const anyMap3: IAnyMap = {
  0.1: 2,
}

const anyMap4: IAnyMap = {
  true: 1,
}

const anyMap5: IAnyMap = {
  [Symbol('qwe')]: 1, // "...that's because square bracket accesses to {} are unchecked:" from https://github.com/Microsoft/TypeScript/issues/24587#issuecomment-394030482
}
