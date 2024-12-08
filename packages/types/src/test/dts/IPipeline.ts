import {
  IAnyMap,
  INormalPipe,
  INormalPipeline,
  INormalValue,
  IPipe,
  IPipeline,
} from '.'

const pipe: IPipe = (e) => e
const pipeline: IPipeline = [pipe]

// @ts-expect-error
const brokenPipe: IPipe = (a: string, b: string): string => a + b
// @ts-expect-error
const brokenPipeline1: IPipeline = [pipe, {}]
// @ts-expect-error
const brokenPipeline2: IPipeline<IPipe<string>> = [(a: number): number => a]

const nv = { value: '', type: 'foo', meta: { foo: 'bar' }, id: 1 }
const normalPipe: INormalPipe = (n: INormalValue) => n
const normalPipeline: INormalPipeline = [normalPipe]

// @ts-expect-error
const brokenNormalPipe1: INormalPipe = (n: string) => n
// @ts-expect-error
const brokenNormalPipe2: INormalPipe<INormalValue<string>> = (n: {
  id: any
  type: any
  meta: IAnyMap
  value: number
}) => n

const brokenNormalPipeline1: INormalPipeline<INormalPipe<INormalValue<string>>> = [
  // @ts-expect-error
  (n: {
    id: any
    type: any
    meta: IAnyMap
    value: number
  }) => n,
]
