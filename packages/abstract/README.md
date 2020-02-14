# @qiwi/substrate-abstract
Abstract classes collection.  
Typedoc: [https://qiwi.github.io/substrate/abstract/](https://qiwi.github.io/substrate/abstract/)

### Install
```bash
yarn add @qiwi/substrate-abstract -D
npm add @qiwi/substrate-abstract -D
```

### Usage
```typescript
import { AbstractError } from '@qiwi/substrate-abstract'

class CustomError extends AbstractError {
  foo: string
  constructor(args) {
    super(...args)
    
    this.foo = 'bar'
  }
}
```
