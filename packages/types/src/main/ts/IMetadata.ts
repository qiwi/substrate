export interface IMetadataProvider {
  defineMetadata(metadataKey: any, metadataValue: any, target: any, propertyKey?: string | symbol): void
  hasMetadata(metadataKey: any, target: any, propertyKey?: string | symbol): boolean
  getMetadata(metadataKey: any, target: any): any
}
