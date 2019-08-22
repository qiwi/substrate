# @qiwi/substrate-abstract
Abstract classes collection

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
