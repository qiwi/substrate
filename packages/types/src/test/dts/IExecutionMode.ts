import { IExecutionMode } from '.'

const syncMode: IExecutionMode = IExecutionMode.SYNC
const asyncMode: IExecutionMode = IExecutionMode.ASYNC
// @ts-expect-error
const brokenMode: IExecutionMode = 'async'
