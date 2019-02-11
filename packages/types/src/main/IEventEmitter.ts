type IEventListener = (...args: any[]) => void;
type IEmitterMethod = (type: string, listener: IEventListener) => void;

interface IEventEmitter {
  emit(type: string, ...args: any[]): void;
  off: IEmitterMethod;
  on: IEmitterMethod;
  once: IEmitterMethod;
}

export {
  IEmitterMethod,
  IEventEmitter,
  IEventListener
}
