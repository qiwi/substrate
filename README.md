# substrate
Common types, interfaces and abstracts

### Install
```bash
npm i @qiwi/substrate -D
yarn i @qiwi/substrate --dev
```

### Usage
```typescript
import { IStringMap } from '@qiwi/substrate'

const foo: IStringMap = {
  bar: 'baz',
  qux: 'quux'
} 
```

### Contract
##### Naming
Upper-camel-case with prefixes `I`, `T` and `A`.
* `IFoo` — Foo interface 
* `TBar` — Bar type
* `ABaz` — Baz abstract

##### Versioning
Type changes without backward compatibility should be complemented by a version suffix `Vx`, where [`x ∈ ℕ`](https://en.wikipedia.org/wiki/Natural_number).
* `IFooV1` — The first version of Foo interface
* `TBarV2` — Bar type version 2

### Docs
* [@qiwi/substrate-types](https://qiwi.github.io/substrate/types)
* [@qiwi/substrate-abstract](https://qiwi.github.io/substrate/abstract)
