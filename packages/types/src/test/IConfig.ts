import { IConfig, Conf, NodeConfig, Uniconfig } from './index';

const conf: IConfig = new Conf();

const numberConf: IConfig<number> = new Conf<number>();

const stringConf: IConfig<string> = new Conf<string>();

const nodeConf: IConfig = NodeConfig;

const uniConf: IConfig = new Uniconfig.Config({});
