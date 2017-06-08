import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { BaseComponent } from './component.base';

import { ViewChild, OnInit } from '@angular/core';
import { OnDestroy, AfterContentInit, SimpleChanges } from '@angular/core/core';
import { InjectableObject } from './injectableobject.base';
import { Subscription } from "rxjs/Subscription";
import { Router } from '@angular/router';
//import { ModalModule } from 'ngx-bootstrap/modal';
//import { TreeModule } from 'angular-tree-component';

import { DataService } from '../../core/services/data.service'
import { AuthenService } from '../../core/services/authen.service';
import { NotificationService } from '../../core/services/notification.service';
import { UtilityService } from '../../core/services/utility.service';
import { UploadService } from '../../core/services/upload.service';

import { SystemConstants } from '../../core/common/system.constants'
import { MessageContstants } from '../../core/common/message.constants';
import { UrlConstants } from '../../core/common/url.constants';


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [AuthenService, NotificationService,UploadService,UtilityService,NotificationService],
    declarations: [BaseComponent]
})
export class BaseModule { }