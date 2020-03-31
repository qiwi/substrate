import { IMetadataProvider } from '.'
import 'reflect-metadata'

const reflectMetadata: IMetadataProvider = Reflect
const customProvider: IMetadataProvider = {
  defineMetadata (metadataKey: any, metadataValue: any, target: any, propertyKey?: string | symbol): void {
    console.log(metadataKey, metadataValue, target, propertyKey)
  },
  hasMetadata (metadataKey: any, target: any, propertyKey?: string | symbol): boolean {
    console.log(metadataKey, target, propertyKey)
    return true
  },
  getMetadata (metadataKey: any, target: any): any {
    console.log(metadataKey, target)
  }
}
const brokenProvider: IMetadataProvider = {
  defineMetadata () {},
  hasMetadata () {}, // $ExpectError
  getMetadata () {}
}
