import { IEnableable } from '.'

const enableable: IEnableable = {
  enable () {},
  disable () {},
}

const brokenEnableable1: IEnableable = {
  // @ts-expect-error
  disable: 1,
  // @ts-expect-error
  enable: null,
}

// @ts-expect-error
const brokenEnableable2: IEnableable = {}
