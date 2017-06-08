import { Injector } from '@angular/core';

let appInjectorRef: Injector;
export const InjectableObject = (injector?: Injector):Injector => {
  if (injector) {
    appInjectorRef = injector;
  }
  return appInjectorRef;
};
