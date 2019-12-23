import * as Conf from 'conf'
import * as NodeConfig from 'config'
import * as Uniconfig from '@qiwi/uniconfig-core'
import { Config, IConfig } from '.'

// FIXME
// const conf: IConfig = new Conf();

// const numberConf: IConfig<number> = new Conf<number>();

// const stringConf: IConfig<string> = new Conf<string>();

const nodeConf: IConfig = NodeConfig

const uniConf: Config = new Uniconfig.Config({})
