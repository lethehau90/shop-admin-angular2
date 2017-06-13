
import { Injectable } from "@angular/core";

@Injectable()
export class CachingService implements ICachingService {

  cachers: { [index: number]: ICacher };
  //#endregion

  //#region Shortcut for Storages
  get localStorage(): ICacher { return this.cachers[CacherType.LocalStorage]; }
  get sessionStorage(): ICacher { return this.cachers[CacherType.SessionStorage]; }
  get cookieStorage(): ICacher { return this.cachers[CacherType.CookieStorageCore]; }
  //#endregion

  //#region Init


  constructor() {
    this.cachers = {};
    this.cachers[CacherType.LocalStorage] = new LocalStorage(window.localStorage);
    this.cachers[CacherType.SessionStorage] = new SessionStorage(window.sessionStorage);
    this.cachers[CacherType.CookieStorageCore] = new CookieStorageCore(document.cookie);
  }
  //#endregion
}

interface ICachingService {
  /**
   * All Cachers indexed by cacher enum
   */
  cachers: { [index: number]: ICacher };
  /**
   * LocalStorage
   */
  localStorage: ICacher;
  /**
   * SessionStorage
   */
  sessionStorage: ICacher;
  /**
   * Cookie Storage
   */
  //cookieStorage: ICacher;
}

const enum CacherType {
  LocalStorage,
  SessionStorage,
  CacheStorageCore,
  CookieStorageCore
}


class LocalStorage implements ICacher {
  constructor(private storage: Storage) { }

  get isAvailable(): boolean { return !!this.storage; }

  get<TModel>(key: string): TModel {
    let data = this.storage.getItem(key);
    if (data) {
      const model = JSON.parse(data);
      //console.log({ message: 'localstorage cache restored with key ' + key, data: model });
      return model as TModel;
    }
    return null;
  }

  store(key: string, value: any): void {

    const strData: string = JSON.stringify(value);
    this.storage.setItem(key, strData);
    //console.log({ message: 'localstorage cache created with key ' + key, data: value });
  }

  remove(key: string): void {
    this.storage.removeItem(key);
    //console.log({ message: 'localstorage cache removed with key ' + key });
  }
}

class SessionStorage implements ICacher {
  constructor(private storage: Storage) { }

  get isAvailable(): boolean { return !!this.storage; }

  get<TModel>(key: string): TModel {
    let data = this.storage.getItem(key);
    if (data) {
      const model = JSON.parse(data);
      //console.log({ message: 'sessionstorage cache restored with key ' + key, data: model });
      return model as TModel;
    }
    return null;
  }

  store(key: string, value: any): void {
    const strData: string = JSON.stringify(value);
    this.storage.setItem(key, strData);
    //console.log({ message: 'sessionstorage cache created with key ' + key, data: value });
  }

  remove(key: string): void {
    this.storage.removeItem(key);
    //console.log({ message: 'sessionstorage cache removed with key ' + key });
  }
}

class CookieStorageCore implements ICacher {

  constructor(private cookies: any) { }

  get isAvailable(): boolean { return !!this.cookies; }


  get<TModel>(key: string): TModel {
    if (this.check(key)) {
      key = encodeURIComponent(key);
      let regexp = new RegExp('(?:^' + key + '|;\\s*' + key + ')=(.*?)(?:;|$)', 'g');
      let result = regexp.exec(this.cookies);
      debugger
      const model = JSON.parse(decodeURIComponent(result[1]));
      return model as TModel;
    } else {
      return null;
    }
  }
  public getAll(): any {
    let cookies: any = {};
    if (this.cookies && this.cookies != '') {
      let split = this.cookies.split(';');
      for (let s of split) {
        let currCookie = s.split('=');
        currCookie[0] = currCookie[0].replace(/^ /, '');
        cookies[decodeURIComponent(currCookie[0])] = decodeURIComponent(currCookie[1]);
      }
    }
    return cookies;
  }
  store(key: string, value: any, expires?: number | Date, path?: string, domain?: string, secure?: boolean): void {
    const _value = JSON.stringify(value);
    let cookieStr = encodeURIComponent(key) + '=' + encodeURIComponent(_value) + ';';

    if (expires) {
      if (typeof expires === 'number') {
        let dtExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
        cookieStr += 'expires=' + dtExpires.toUTCString() + ';';
      } else {
        cookieStr += 'expires=' + expires.toUTCString() + ';';
      }
    }

    if (path) {
      cookieStr += 'path=' + path + ';';
    }
    if (domain) {
      cookieStr += 'domain=' + domain + ';';
    }
    if (secure) {
      cookieStr += 'secure;';
    }

    // console.log(cookieStr);
   document.cookie = cookieStr;
  }

  remove(key: string, path?: string, domain?: string): void {
    this.store(key, '', -1, path, domain);
  }
  public removeAll(path?: string, domain?: string): void {
    let cookies: any = this.getAll();
    for (let cookieName of Object.keys(cookies)) {
      this.remove(cookieName, path, domain);
    }

  }
  public check(name: string): boolean {
    if (typeof document === "undefined") return false;  // Check if document exist avoiding issues on server side prerendering
    name = encodeURIComponent(name);
    let regexp = new RegExp('(?:^' + name + '|;\\s*' + name + ')=(.*?)(?:;|$)', 'g');
    let exists = regexp.test(document.cookie);
    return exists;
  }

}



interface ICacher {
  /**
   * Get data from storage
   * @param key Cache key
   * @returns {TModel}
   */
  get<TModel>(key: string): TModel;
  /**
   * Store cache by key
   * @param key Key value
   * @param value Value object
   */
  store(key: string, value: any): void;
  /**
   * Remove cache by key
   * @param key Key
   */
  remove(key: string): void;
  /**
   * Returns implemented storage type is available
   */
  isAvailable: boolean;
}

