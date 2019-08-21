declare module '@qiwi/substrate-types/target/es5/IAnyMap' {
	type IAnyMap = {
	    [key: string]: any;
	    [key: number]: any;
	};
}
declare module '@qiwi/substrate-types/target/es5/ICloneable' {
	interface ICloneable<T> {
	    clone(): T;
	}
}
declare module '@qiwi/substrate-types/target/es5/ICollection' {
	type ICollectionItem = any;
	interface ICollection<T> {
	    get: (index: number | string) => T | undefined;
	    add: (index: number | string, item: T) => T;
	    remove: (index: number | string) => T | undefined;
	    clear: () => void;
	    size: number;
	    isEmpty: () => boolean;
	}
}
declare module '@qiwi/substrate-types/target/es5/IConfig' {
	type TConfigKey = string;
	interface IConfig<T = any> {
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
	interface IConfigurable {
	    setConfig: (options?: any) => void;
	    getConfig: () => any;
	}
}
declare module '@qiwi/substrate-types/target/es5/ICurrency' {
	type ICurrency = string;
}
declare module '@qiwi/substrate-types/target/es5/IEventEmitter' {
	type IEventListener = (...args: any[]) => void;
	type IEmitterMethod = (type: string, listener: IEventListener) => void;
	interface IEventEmitter {
	    emit(type: string, ...args: any[]): void;
	    off: IEmitterMethod;
	    on: IEmitterMethod;
	    once: IEmitterMethod;
	}
}
declare module '@qiwi/substrate-types/target/es5/ILogger' {
	type ILoggerMethod = (...args: any[]) => void;
	type TLogLevel = number;
	interface ILogger {
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
	interface IRequest {
	    res?: IResponse;
	    [key: string]: any;
	}
	interface IResponse {
	    status: (status: number) => IResponse;
	    send: (arg: string | object) => IResponse;
	    json: () => IResponse;
	    req?: IRequest;
	    [key: string]: any;
	}
	interface INext {
	    (...args: any[]): any;
	}
	interface IRequestMiddleware {
	    (req: IRequest, res: IResponse, next?: INext): void;
	}
	interface IErrorMiddleware {
	    (err: Error, req: IRequest, res: IResponse, next?: INext): void;
	}
	type IMiddleware = IRequestMiddleware | IErrorMiddleware;
	interface IAsyncRequestMiddleware {
	    (req: IRequest, res: IResponse, next?: INext): Promise<void>;
	}
	interface IAsyncErrorMiddleware {
	    (err: Error, req: IRequest, res: IResponse, next?: INext): Promise<void>;
	}
	type IAsyncMiddleware = IAsyncRequestMiddleware | IAsyncErrorMiddleware;
}
declare module '@qiwi/substrate-types/target/es5/IMoney' {
	import { ICurrency } from '@qiwi/substrate-types/target/es5/ICurrency';
	type IValue = number;
	interface IMoney {
	    value: IValue;
	    currency: ICurrency;
	    toString: () => string;
	}
}
declare module '@qiwi/substrate-types/target/es5/IPromise' {
	type TPromiseExecutor<TValue = any, TReason = any> = (resolve: (value: TValue) => void, reject: (reason: TReason) => void) => void;
	interface IPromiseConstructor<TValue = any, TReason = any> {
	    new (executor: TPromiseExecutor<TValue>): IPromise<TValue, TReason>;
	    all: (values: Array<IPromise<TValue, TReason>>) => IPromise<TValue[], TReason>;
	    race: (values: Array<IPromise<TValue, TReason>>) => IPromise<TValue, TReason>;
	    reject: (reason?: TReason) => IPromise<TValue, TReason>;
	    resolve: (value?: TValue) => IPromise<TValue, TReason>;
	}
	interface IPromise<TValue = any, TReason = any> {
	    then: (onSuccess?: (value: TValue) => any, onReject?: (reason: TReason) => any) => IPromise;
	    catch: (onReject: (reason: TReason) => any) => IPromise;
	    finally?: (onFinally: () => any) => IPromise;
	}
	const IPromise: PromiseConstructor;
}
declare module '@qiwi/substrate-types/target/es5/IStack' {
	import { ICollection } from '@qiwi/substrate-types/target/es5/ICollection';
	type IStackItem = any;
	interface IStack<T> extends ICollection<T> {
	    push: (...items: Array<T>) => T;
	    pop: () => T | undefined;
	    unshift: (...items: Array<T>) => T;
	    shift: () => T | undefined;
	    indexOf: (item: T) => number;
	    first: () => T | undefined;
	    last: () => T | undefined;
	}
}
declare module '@qiwi/substrate-types/target/es5/IStorage' {
	type TStorageKey = string;
	type TStorageValue = any;
	type TStorageTTL = number;
	interface IStorage {
	    get: (key: TStorageKey) => TStorageValue;
	    set: (key: TStorageKey, value: TStorageValue, ttl?: TStorageTTL) => void;
	    has: (key: TStorageKey) => boolean;
	    remove: (key: TStorageKey) => void;
	    size: () => number;
	    reset: () => void;
	}
}
declare module '@qiwi/substrate-types/target/es5/IStringMap' {
	type IStringMap = {
	    [key: string]: string;
	};
}
declare module '@qiwi/substrate-types/target/es5/IUtilEach' {
	type TUtilEachCollection = any[] | object;
	type TUtilEachHandler = (value: any, key?: string | number, collection?: TUtilEachCollection) => void;
	type TUtilEach = (collection: TUtilEachCollection, handler: TUtilEachHandler) => TUtilEachCollection;
}
declare module '@qiwi/substrate-types/target/es5/IUtilGet' {
	type TUtilGetPath = Array<string | number> | string;
	type TUtilGetObject = object;
	type TUtilGetDefaultValue = any;
	type TUtilGetResponse = any;
	type TUtilGet = (obj: TUtilGetObject, path: TUtilGetPath, defaultValue?: TUtilGetDefaultValue) => TUtilGetResponse;
}
declare module '@qiwi/substrate-types/target/es5/IUtilMap' {
	type TUtilMapCollection = any[] | object;
	type TUtilMapHandler = (value: any, key?: string | number, collection?: TUtilMapCollection) => any;
	type TUtilMap = (collection: TUtilMapCollection, handler: TUtilMapHandler) => any[];
}
declare module '@qiwi/substrate-types/target/es5/IUtilSet' {
	type TUtilSetPath = Array<string | number> | string;
	type TUtilSetObject = object;
	type TUtilSetValue = any;
	type TUtilSet = (obj: TUtilSetObject, path: TUtilSetPath, value: TUtilSetValue) => void;
}
declare module '@qiwi/substrate-types/target/es5/TPredicate' {
	type TPredicate = (...args: any[]) => boolean;
}
declare module '@qiwi/substrate-types/target/es5/index' {
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
	export { IMiddleware, IAsyncMiddleware, IErrorMiddleware, IRequestMiddleware, IRequest, IResponse, INext } from '@qiwi/substrate-types/target/es5/IMiddleware';
}
declare module '@qiwi/substrate-types' {
	export * from '@qiwi/substrate-types/target/es5/index';
}
