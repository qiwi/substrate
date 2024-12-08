import 'reflect-metadata'

import { IMetadataProvider } from '.'

const reflectMetadata: IMetadataProvider = Reflect
const customProvider: IMetadataProvider = {
  defineMetadata (
    metadataKey: any,
    metadataValue: any,
    target: any,
    propertyKey?: string | symbol,
  ): void {
    console.log(metadataKey, metadataValue, target, propertyKey)
  },
  hasMetadata (
    metadataKey: any,
    target: any,
    propertyKey?: string | symbol,
  ): boolean {
    console.log(metadataKey, target, propertyKey)
    return true
  },
  getMetadata (metadataKey: any, target: any): any {
    console.log(metadataKey, target)
  },
  getOwnMetadata (metadataKey: any, target: any, propertyKey: symbol): any {
    console.log(metadataKey, target, propertyKey)
  },
}
const brokenProvider: IMetadataProvider = {
  defineMetadata () {},
  // @ts-expect-error
  hasMetadata () {},
  getMetadata () {},
  getOwnMetadata () {},
}
