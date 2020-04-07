import { IUnaryFn } from './IFunction'
import { INormalValue } from './INormalValue'

export type IPipe<E=any> = IUnaryFn<E, E>
export type IPipeline<P extends IPipe=IPipe> = Array<P>

export type INormalPipe<E extends INormalValue=INormalValue> = IPipe<E>
export type INormalPipeline<P extends INormalPipe = INormalPipe> = IPipeline<P>
