import { IEnableable } from '.'

const enableable: IEnableable = {
  enable () {},
  disable () {},
}

const brokenEnableable1: IEnableable = {
  disable: 1, // $ExpectError
  enable: null, // $ExpectError
}

const brokenEnableable2: IEnableable = {} // $ExpectError
