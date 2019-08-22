export type IError = {
  message: string
  code?: string | number
  [key: string]: any
}

export type IErrorOpts = {
  message: string
}

export class AbstractError extends Error implements IError {
  message: string
  code?: string | number
  constructor(message: string | IErrorOpts) {
    const opts = typeof message === 'string'
      ? { message }
      : message

    super(opts.message)
    this.message = opts.message
  }
}
