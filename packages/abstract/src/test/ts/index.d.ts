declare module '@qiwi/substrate-abstract/target/es5/AError' {
	export type IError = {
	    message: string;
	    code?: string | number;
	    [key: string]: any;
	};
	export type IErrorOpts = {
	    message: string;
	};
	export class AbstractError extends Error implements IError {
	    message: string;
	    code?: string | number;
	    constructor(message: string | IErrorOpts);
	}
}
declare module '@qiwi/substrate-abstract/target/es5/index' {
	export * from '@qiwi/substrate-abstract/target/es5/AError';
}
declare module '@qiwi/substrate-abstract' {
	export * from '@qiwi/substrate-abstract/target/es5/index';
}
