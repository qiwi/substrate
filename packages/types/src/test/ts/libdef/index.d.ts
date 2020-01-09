declare module '@qiwi/substrate-types/target/es5/IAnyMap' {
	/** @qiwi/substrate-types */
	/** */
	export type IAnyMap = {
	    [key: string]: any;
	    [key: number]: any;
	};
}
declare module '@qiwi/substrate-types/target/es5/ICloneable' {
	/** @qiwi/substrate-types */
	/** */
	export interface ICloneable<T> {
	    clone(): T;
	}
}
declare module '@qiwi/substrate-types/target/es5/ICollection' {
	/** @qiwi/substrate-types */
	/** */
	export type ICollectionItem = any;
	export interface ICollection<T> {
	    get: (index: number | string) => T | undefined;
	    add: (index: number | string, item: T) => T;
	    remove: (index: number | string) => T | undefined;
	    clear: () => void;
	    size: number;
	    isEmpty: () => boolean;
	}
}
declare module '@qiwi/substrate-types/target/es5/IConfig' {
	/** @qiwi/substrate-types */
	/** */
	export type TConfigKey = string;
	export interface IConfig<T = any> {
	    set?: (key: TConfigKey, value: T) => void;
	    get: (key: TConfigKey) => T;
	    has: (key: TConfigKey) => boolean;
	    delete?: (key: TConfigKey) => void;
	    clear?: () => void;
	    size?: number;
	    [key: string]: any;
	}
}
declare module '@qiwi/substrate-types/target/es5/IConfigurable' {
	/** @qiwi/substrate-types */
	/** */
	export interface IConfigurable {
	    setConfig: (options?: any) => void;
	    getConfig: () => any;
	}
}
declare module '@qiwi/substrate-types/target/es5/IConstructor' {
	/** @qiwi/substrate-types */
	/** */
	export type IConstructor<T = {}> = new (...args: any[]) => T;
}
declare module '@qiwi/substrate-types/target/es5/ICurrency' {
	/** @qiwi/substrate-types */
	/** */
	export type ICurrency = string;
}
declare module '@qiwi/substrate-types/target/es5/IEventEmitter' {
	/** @qiwi/substrate-types */
	/** */
	export type IEventListener = (...args: any[]) => void;
	export type IEmitterMethod = (type: string, listener: IEventListener) => void;
	export interface IEventEmitter {
	    emit(type: string, ...args: any[]): void;
	    off: IEmitterMethod;
	    on: IEmitterMethod;
	    once: IEmitterMethod;
	}
}
declare module '@qiwi/substrate-types/target/es5/IIterable' {
	/** @qiwi/substrate-types */
	/** */
	export interface IIteratorResult {
	    value: any;
	    done: boolean;
	}
	export interface IIterator {
	    next(): {
	        value: any;
	        done: boolean;
	    };
	}
	export interface IIterable {
	    [Symbol.iterator](): IIterator;
	}
}
declare module '@qiwi/substrate-types/target/es5/ILogger' {
	/** @qiwi/substrate-types */
	/** */
	export type ILoggerMethod = (...args: any[]) => void;
	export type TLogLevel = number;
	export interface ILogger {
	    trace: ILoggerMethod;
	    debug: ILoggerMethod;
	    info: ILoggerMethod;
	    log: ILoggerMethod;
	    warn: ILoggerMethod;
	    error: ILoggerMethod;
	    fatal?: ILoggerMethod;
	    [key: string]: any;
	    [key: number]: any;
	}
}
declare module '@qiwi/substrate-types/target/es5/IMiddleware' {
	/** @qiwi/substrate-types */
	/** */
	export interface IRequest {
	    res?: IResponse;
	    [key: string]: any;
	}
	export interface IResponse {
	    status: (status: number) => IResponse;
	    send: (arg: string | object) => IResponse;
	    json: () => IResponse;
	    req?: IRequest;
	    [key: string]: any;
	}
	export interface INext {
	    (...args: any[]): any;
	}
	export interface IRequestMiddleware {
	    (req: IRequest, res: IResponse, next?: INext): void;
	}
	export interface IErrorMiddleware {
	    (err: Error, req: IRequest, res: IResponse, next?: INext): void;
	}
	export type IMiddleware = IRequestMiddleware | IErrorMiddleware;
	export interface IAsyncRequestMiddleware {
	    (req: IRequest, res: IResponse, next?: INext): Promise<void>;
	}
	export interface IAsyncErrorMiddleware {
	    (err: Error, req: IRequest, res: IResponse, next?: INext): Promise<void>;
	}
	export type IAsyncMiddleware = IAsyncRequestMiddleware | IAsyncErrorMiddleware;
}
declare module '@qiwi/substrate-types/target/es5/IMoney' {
	/** @qiwi/substrate-types */
	/** */
	import { ICurrency } from '@qiwi/substrate-types/target/es5/ICurrency';
	export type IValue = number;
	export interface IMoney {
	    value: IValue;
	    currency: ICurrency;
	    toString: () => string;
	}
}
declare module '@qiwi/substrate-types/target/es5/IStringMap' {
	/** @qiwi/substrate-types */
	/** */
	export type IStringMap = {
	    [key: string]: string;
	};
}
declare module '@qiwi/substrate-types/target/es5/IUtilGet' {
	/** @qiwi/substrate-types */
	/** */
	export type TUtilGetPath = Array<string | number> | string;
	export type TUtilGetObject = object;
	export type TUtilGetDefaultValue = any;
	export type TUtilGetResponse = any;
	export type TUtilGet = (obj: TUtilGetObject, path: TUtilGetPath, defaultValue?: TUtilGetDefaultValue) => TUtilGetResponse;
}
declare module '@qiwi/substrate-types/target/es5/IUtilSet' {
	/** @qiwi/substrate-types */
	/** */
	export type TUtilSetPath = Array<string | number> | string;
	export type TUtilSetObject = object;
	export type TUtilSetValue = any;
	export type TUtilSet = (obj: TUtilSetObject, path: TUtilSetPath, value: TUtilSetValue) => void;
}
declare module '@qiwi/substrate-types/target/es5/IUtilEach' {
	/** @qiwi/substrate-types */
	/** */
	export type TUtilEachCollection = any[] | object;
	export type TUtilEachHandler = (value: any, key?: string | number, collection?: TUtilEachCollection) => void;
	export type TUtilEach = (collection: TUtilEachCollection, handler: TUtilEachHandler) => TUtilEachCollection;
}
declare module '@qiwi/substrate-types/target/es5/IUtilMap' {
	/** @qiwi/substrate-types */
	/** */
	export type TUtilMapCollection = any[] | object;
	export type TUtilMapHandler = (value: any, key?: string | number, collection?: TUtilMapCollection) => any;
	export type TUtilMap = (collection: TUtilMapCollection, handler: TUtilMapHandler) => any[];
}
declare module '@qiwi/substrate-types/target/es5/IPromise' {
	/** @qiwi/substrate-types */
	/** */
	import { IConstructor } from '@qiwi/substrate-types/target/es5/IConstructor';
	export type TPromiseExecutor<TValue = any, TReason = any> = (resolve: (value: TValue) => void, reject: (reason: TReason) => void) => void;
	export interface IPromiseConstructor<TValue = any, TReason = any> extends IConstructor<IPromise<TValue, TReason>> {
	    new (executor: TPromiseExecutor<TValue>): IPromise<TValue, TReason>;
	    all: (values: Iterable<IPromise<TValue, TReason>>) => IPromise<TValue[], TReason>;
	    race: (values: Iterable<IPromise<TValue, TReason>>) => IPromise<TValue, TReason>;
	    reject: (reason?: TReason) => IPromise<TValue, TReason>;
	    resolve: (value?: TValue) => IPromise<TValue, TReason>;
	}
	export interface IPromise<TValue = any, TReason = any> {
	    then: (onSuccess?: (value: TValue) => any, onReject?: (reason: TReason) => any) => IPromise;
	    catch: (onReject: (reason: TReason) => any) => IPromise;
	    finally: (onFinally: () => any) => IPromise;
	    readonly [Symbol.toStringTag]: string;
	}
	export const IPromise: PromiseConstructor;
}
declare module '@qiwi/substrate-types/target/es5/IStorage' {
	/** @qiwi/substrate-types */
	/** */
	export type TStorageKey = string;
	export type TStorageValue = any;
	export type TStorageTTL = number;
	export interface IStorage {
	    get: (key: TStorageKey) => TStorageValue;
	    set: (key: TStorageKey, value: TStorageValue, ttl?: TStorageTTL) => void;
	    has: (key: TStorageKey) => boolean;
	    remove: (key: TStorageKey) => void;
	    size: () => number;
	    reset: () => void;
	}
}
declare module '@qiwi/substrate-types/target/es5/IStack' {
	/** @qiwi/substrate-types */
	/** */
	import { ICollection } from '@qiwi/substrate-types/target/es5/ICollection';
	export type IStackItem = any;
	export interface IStack<T> extends ICollection<T> {
	    push: (...items: Array<T>) => T;
	    pop: () => T | undefined;
	    unshift: (...items: Array<T>) => T;
	    shift: () => T | undefined;
	    indexOf: (item: T) => number;
	    first: () => T | undefined;
	    last: () => T | undefined;
	    toArray(): Array<T>;
	}
}
declare module '@qiwi/substrate-types/target/es5/TPredicate' {
	/** @qiwi/substrate-types */
	/** */
	export type TPredicate = (...args: any[]) => boolean;
}
declare module '@qiwi/substrate-types/target/es5/export' {
	/** @qiwi/substrate-types */
	/** */
	export { IStringMap } from '@qiwi/substrate-types/target/es5/IStringMap';
	export { IAnyMap } from '@qiwi/substrate-types/target/es5/IAnyMap';
	export { IEventEmitter } from '@qiwi/substrate-types/target/es5/IEventEmitter';
	export { ILogger, TLogLevel, ILoggerMethod } from '@qiwi/substrate-types/target/es5/ILogger';
	export { TUtilGet } from '@qiwi/substrate-types/target/es5/IUtilGet';
	export { TUtilSet } from '@qiwi/substrate-types/target/es5/IUtilSet';
	export { TUtilEach } from '@qiwi/substrate-types/target/es5/IUtilEach';
	export { TUtilMap } from '@qiwi/substrate-types/target/es5/IUtilMap';
	export { ICloneable } from '@qiwi/substrate-types/target/es5/ICloneable';
	export { ICurrency } from '@qiwi/substrate-types/target/es5/ICurrency';
	export { IPromiseConstructor, IPromise } from '@qiwi/substrate-types/target/es5/IPromise';
	export { IStorage } from '@qiwi/substrate-types/target/es5/IStorage';
	export { IMoney } from '@qiwi/substrate-types/target/es5/IMoney';
	export { IStack } from '@qiwi/substrate-types/target/es5/IStack';
	export { ICollection } from '@qiwi/substrate-types/target/es5/ICollection';
	export { TPredicate } from '@qiwi/substrate-types/target/es5/TPredicate';
	export { IConfigurable } from '@qiwi/substrate-types/target/es5/IConfigurable';
	export { IConfig } from '@qiwi/substrate-types/target/es5/IConfig';
	export { IConstructor } from '@qiwi/substrate-types/target/es5/IConstructor';
	export { IIterable, IIterator, IIteratorResult } from '@qiwi/substrate-types/target/es5/IIterable';
	export { IMiddleware, IAsyncMiddleware, IErrorMiddleware, IRequestMiddleware, IRequest, IResponse, INext } from '@qiwi/substrate-types/target/es5/IMiddleware';
	export { IPool, IPooledObject, IPooledObjectFactory, IPooledObjectStatus } from '@qiwi/substrate-types/target/es5/IPool';
}
declare module '@qiwi/substrate-types/target/es5/IPool' {
	/** @qiwi/substrate-types */
	/** */
	import { IPromise } from '@qiwi/substrate-types/target/es5/export';
	export const enum IPooledObjectStatus {
	    READY = "ready",
	    ACTIVE = "active",
	    INVALID = "invalid"
	}
	export interface IPooledObject<T> {
	    ref: T;
	    status: IPooledObjectStatus;
	    activate(): void;
	    passivate(): void;
	    destroy(): void;
	    validate(): boolean;
	    [key: string]: any;
	}
	export interface IPooledObjectFactory<T> {
	    (...args: any[]): IPooledObject<T>;
	}
	export interface IPool<T> {
	    factory: IPooledObjectFactory<T>;
	    borrow(): IPromise<T>;
	    release(instance: T): void;
	    invalidate(instance: T): void;
	    [key: string]: any;
	}
}
declare module '@qiwi/substrate-types/target/es5/aliases' {
	/** @qiwi/substrate-types */
	/** */
	export { IStringMap as StringMap } from '@qiwi/substrate-types/target/es5/IStringMap';
	export { IAnyMap as AnyMap } from '@qiwi/substrate-types/target/es5/IAnyMap';
	export { IEventEmitter as EventEmitter } from '@qiwi/substrate-types/target/es5/IEventEmitter';
	export { ILogger as Logger, TLogLevel as LogLevel, ILoggerMethod as LoggerMethod } from '@qiwi/substrate-types/target/es5/ILogger';
	export { TUtilGet as UtilGet } from '@qiwi/substrate-types/target/es5/IUtilGet';
	export { TUtilSet as UtilSet } from '@qiwi/substrate-types/target/es5/IUtilSet';
	export { TUtilEach as UtilEach } from '@qiwi/substrate-types/target/es5/IUtilEach';
	export { TUtilMap as UtilMap } from '@qiwi/substrate-types/target/es5/IUtilMap';
	export { ICloneable as Cloneable } from '@qiwi/substrate-types/target/es5/ICloneable';
	export { ICurrency as Currency } from '@qiwi/substrate-types/target/es5/ICurrency';
	export {} from '@qiwi/substrate-types/target/es5/IPromise';
	export { IStorage as Storage } from '@qiwi/substrate-types/target/es5/IStorage';
	export { IMoney as Money } from '@qiwi/substrate-types/target/es5/IMoney';
	export {} from '@qiwi/substrate-types/target/es5/IStack';
	export { ICollection as Collection } from '@qiwi/substrate-types/target/es5/ICollection';
	export { TPredicate as Predicate } from '@qiwi/substrate-types/target/es5/TPredicate';
	export { IConfigurable as Configurable } from '@qiwi/substrate-types/target/es5/IConfigurable';
	export { IConfig as Config } from '@qiwi/substrate-types/target/es5/IConfig';
	export { IConstructor as Constructor } from '@qiwi/substrate-types/target/es5/IConstructor';
	export { IIterable as Iterable, IIterator as Iterator, IIteratorResult as IteratorResult } from '@qiwi/substrate-types/target/es5/IIterable';
	export { IMiddleware as Middleware, IAsyncMiddleware as AsyncMiddleware, IErrorMiddleware as ErrorMiddleware, IRequestMiddleware as RequestMiddleware, IRequest as Request, IResponse as Response, INext as Next } from '@qiwi/substrate-types/target/es5/IMiddleware';
	export { IPool as Pool, IPooledObject as PooledObject, IPooledObjectFactory as PooledObjectFactory, IPooledObjectStatus as PooledObjectStatus } from '@qiwi/substrate-types/target/es5/IPool';
}
declare module '@qiwi/substrate-types/target/es5/helpers' {
	export type UnionToIntersection<U> = ((U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never);
}
declare module '@qiwi/substrate-types/target/es5/index' {
	/** @qiwi/substrate-types */
	/** */
	export * from '@qiwi/substrate-types/target/es5/export';
	export * from '@qiwi/substrate-types/target/es5/aliases';
	export * from '@qiwi/substrate-types/target/es5/helpers';
}
declare module '@qiwi/substrate-types' {
	export * from '@qiwi/substrate-types/target/es5/index';
}
