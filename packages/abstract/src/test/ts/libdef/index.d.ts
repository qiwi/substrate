declare module '@qiwi/substrate-abstract/target/es5/AError' {
	/** @qiwi/substrate-abstract */
	/** */
	export type IError = {
	    message: string;
	    code?: string | number;
	    [key: string]: any;
	};
	export type IErrorOpts = {
	    message: string;
	};
	export class AError extends Error implements IError {
	    message: string;
	    code?: string | number;
	    constructor(message: string | IErrorOpts);
	}
}
declare module '@qiwi/substrate-abstract/target/es5/aliases' {
	/** @qiwi/substrate-abstract */
	/** */
	export { AError as AbstractError, IError as Error, IErrorOpts as ErrorOpts } from '@qiwi/substrate-abstract/target/es5/AError';
}
declare module '@qiwi/substrate-abstract/target/es5/export' {
	/** @qiwi/substrate-abstract */
	/** */
	export { AError, IError, IErrorOpts } from '@qiwi/substrate-abstract/target/es5/AError';
}
declare module '@qiwi/substrate-abstract/target/es5/index' {
	/** @qiwi/substrate-abstract */
	/** */
	export * from '@qiwi/substrate-abstract/target/es5/export';
	export * from '@qiwi/substrate-abstract/target/es5/aliases';
}
declare module '@qiwi/substrate-abstract' {
	export * from '@qiwi/substrate-abstract/target/es5/index';
}
