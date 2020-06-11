import { IExecutionMode } from '.'

const syncMode: IExecutionMode = IExecutionMode.SYNC
const asyncMode: IExecutionMode = IExecutionMode.ASYNC
const brokenMode: IExecutionMode = 'async' // $ExpectError
