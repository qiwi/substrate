import { IConfigurable } from './index';

class WrongConfigurable implements IConfigurable { // $ExpectError
}

class Configurable implements IConfigurable {
  someStringField: string;

  constructor(value: string) {
    this.someStringField = value;
  }

  config(value: string) {
    this.someStringField = value;
  }
}
