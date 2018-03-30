import { OnInit } from '@angular/core';
import { OnDestroy, AfterContentInit, SimpleChanges } from '@angular/core/core';

import { InjectableObject } from './injectableobject.base';
import { Subscription } from "rxjs/Subscription";
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from "lodash";

import { DataService } from '../../core/services/data.service'
import { AuthenService } from '../../core/services/authen.service';
import { NotificationService } from '../../core/services/notification.service';
import { UtilityService } from '../../core/services/utility.service';
import { UploadService } from '../../core/services/upload.service';
import { ShortcutService, Command } from "app/core/services/hotkey.service";

import { SystemConstants } from '../../core/common/system.constants'
import { MessageContstants } from '../../core/common/message.constants';
import { UrlConstants } from '../../core/common/url.constants';
import { PageConstants } from "app/core/common/page.constants";
import { CachingService } from '../services/caching.service';
import { SignalrService } from './../services/signalr.service';


interface IBaseComponentOptions {
  hotkey?: boolean;
  tableName?: string
}

export class BaseComponent implements OnInit, OnDestroy, AfterContentInit {

  public _componentName: string = 'BaseComponent';

  public _dataService: DataService;
  public _authenService: AuthenService;
  public _notificationService: NotificationService;
  public _utilityService: UtilityService;
  public _uploadService: UploadService;
  public _shortcutService: ShortcutService
  public _cachingService: CachingService
  public _signalrService: SignalrService

  public _systemConstants: any;
  public _messageContstants: any;
  public _urlConstants: any;
  public _pageConstants: any;

  public _router: Router;
  public _activatedRoute: ActivatedRoute

  subscription: Subscription;

  constructor(private opt?: IBaseComponentOptions) {
    const _injector = InjectableObject();

    this._dataService = _injector.get(DataService);
    this._notificationService = _injector.get(NotificationService);
    this._authenService = _injector.get(AuthenService);
    this._utilityService = _injector.get(UtilityService);
    this._uploadService = _injector.get(UploadService);
    this._shortcutService = _injector.get(ShortcutService);
    this._cachingService = _injector.get(CachingService);
    this._signalrService = _injector.get(SignalrService);

    this._systemConstants = SystemConstants;
    this._messageContstants = MessageContstants;
    this._urlConstants = UrlConstants;
    this._pageConstants = PageConstants;

    this._router = _injector.get(Router);
    this._activatedRoute = _injector.get(ActivatedRoute);


    this.subscription = this._shortcutService.commands.subscribe(this.handleCommand);
  }

  ngOnInit() {
    console.log(`${(<any>this).constructor.name}: OnInit`);
    this._componentName = (<any>this).constructor.name;
    console.log("start ngOninit: " + this._componentName);

    console.log(this.opt)
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    //console.log(`${(<any>this).constructor.name}: OnInit`);
    console.log("ngOnDestroy: " + `${(<any>this).constructor.name}` )
    this.subscription.unsubscribe();
  }

  handleCommand = (command: Command) => {
    switch (command.name) {
      case 'ProductComponent.open': this._router.navigate(['/main/product/index']); break;
      case 'ProductCategoryComponent.open': this._router.navigate(['/main/product-category/index']); break;
    }

    if (!_.isUndefined(this[command.name]) && _.isFunction(this[command.name]))
      this[command.name].call(this);
  }

  ngOnChanges(changes: SimpleChanges) {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add 'implements OnChanges' to the class.
    // console.log(`${(<any>this).constructor.name}: OnChanges`);
  }

  ngDoCheck() {
    // tslint:disable-next-line:max-line-length
    // Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    // Add 'implements DoCheck' to the class.
    // console.log(`${(<any>this).constructor.name}: DoCheck`);
  }
  ngAfterContentChecked() {
    // Called after every check of the component's or directive's content.
    // Add 'implements AfterContentChecked' to the class.
    //console.log(`${(<any>this).constructor.name}: AfterContentChecked`);
  }

  ngAfterContentInit() {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    // Add 'implements AfterContentInit' to the class.
    //console.log(`${(<any>this).constructor.name}: AfterContentInit`);
  }
}
