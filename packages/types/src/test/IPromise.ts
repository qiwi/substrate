import { IPromise, IPromiseConstructor, BluebirdPromise } from './index'

const executor = (resolve: (value: number) => void, reject: (value: number) => void) => {
  const value = Math.random();
  if (Math.random() > 0.5) {
    resolve(value);
  } else {
    reject(value);
  }
};

const nativePromiseConstructor: IPromiseConstructor = Promise;
const bluebirdPromiseConstructor: IPromiseConstructor = BluebirdPromise;
const nativePromise: IPromise<number> = new Promise<number>(executor);
const bluebirdPromise: IPromise<number> = new BluebirdPromise<number>(executor);
