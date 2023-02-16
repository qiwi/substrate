import * as Uniconfig from '@qiwi/uniconfig-core'

import * as NodeConfig from 'config'

import { Config, IConfig } from '.'

// FIXME
// import * as Conf from 'conf'
// const conf: IConfig = new Conf();

// const numberConf: IConfig<number> = new Conf<number>();

// const stringConf: IConfig<string> = new Conf<string>();

const nodeConf: IConfig = NodeConfig

const uniConf: Config = new Uniconfig.Config({})
