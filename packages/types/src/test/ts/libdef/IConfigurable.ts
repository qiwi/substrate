import { IConfigurable } from '.'

class WrongConfigurable implements IConfigurable { // $ExpectError
  someStringField: string

  constructor (value: string) {
    this.someStringField = value
  }

  getConfig (): string {
    return this.someStringField
  }
}

class Configurable implements IConfigurable {
  someStringField: string

  constructor (value: string) {
    this.someStringField = value
  }

  setConfig (value: string) {
    this.someStringField = value
  }

  getConfig (): string {
    return this.someStringField
  }
}
