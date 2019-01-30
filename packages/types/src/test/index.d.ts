declare module '@qiwi/substrate-types/lib/es5/IStringMap' {
	 type IStringMap = {
	    [key: string]: string;
	};
	export { IStringMap };
}
declare module '@qiwi/substrate-types/lib/es5/index' {
	import { IStringMap } from '@qiwi/substrate-types/lib/es5/IStringMap';
	export { IStringMap };
}
declare module '@qiwi/substrate-types' {
	export * from '@qiwi/substrate-types/lib/es5/index';
}
