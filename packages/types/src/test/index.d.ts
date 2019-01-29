declare module '@qiwi/substrate-types/lib/es5/IStringMap' {
	export type IStringMap = {
	    [key: string]: string;
	};
}
declare module '@qiwi/substrate-types/lib/es5/index' {
	export * from '@qiwi/substrate-types/lib/es5/IStringMap';
}
declare module '@qiwi/substrate-types' {
	export * from '@qiwi/substrate-types/lib/es5/index';
}
