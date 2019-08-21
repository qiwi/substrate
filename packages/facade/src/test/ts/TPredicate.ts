import { TPredicate } from './index';

const wrongPredicate: TPredicate = (a: number, b: number): number => a + b; // $ExpectError
const predicate: TPredicate = (a: number, b: number): boolean => a > b;
