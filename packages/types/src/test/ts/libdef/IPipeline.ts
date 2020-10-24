import {
  IAnyMap,
  INormalPipe,
  INormalPipeline,
  INormalValue,
  IPipe,
  IPipeline,
} from '.'

const pipe: IPipe = e => e
const pipeline: IPipeline = [pipe]

const brokenPipe: IPipe = (a: string, b: string): string => a + b // $ExpectError
const brokenPipeline1: IPipeline = [pipe, {}] // $ExpectError
const brokenPipeline2: IPipeline<IPipe<string>> = [(a: number): number => a] // $ExpectError

const nv = { value: '', type: 'foo', meta: { foo: 'bar' }, id: 1 }
const normalPipe: INormalPipe = (n: INormalValue) => n
const normalPipeline: INormalPipeline = [normalPipe]

const brokenNormalPipe1: INormalPipe = (n: string) => n // $ExpectError
const brokenNormalPipe2: INormalPipe<INormalValue<string>> = (n: { // $ExpectError
  id: any
  type: any,
  meta: IAnyMap,
  value: number
}) => n

const brokenNormalPipeline1: INormalPipeline<INormalPipe<INormalValue<string>>> = [(n: { // $ExpectError
    id: any
    type: any,
    meta: IAnyMap,
    value: number
  }) => n]
