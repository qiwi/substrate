import { TPredicate } from '.'

// @ts-expect-error
const wrongPredicate: TPredicate = (a: number, b: number): number => a + b
const predicate: TPredicate = (a: number, b: number): boolean => a > b
