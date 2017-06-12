import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { appRouter } from './app.routes';

import * as $ from 'jquery';

import { AuthGuard } from './core/guards/auth.guard';
import { InjectableObject } from "app/core/base/injectableobject.base";
import { DataService } from "app/core/services/data.service";
import { AuthenService } from "app/core/services/authen.service";
import { NotificationService } from "app/core/services/notification.service";
import { UploadService } from "app/core/services/upload.service";
import { UtilityService } from "app/core/services/utility.service";
import { ShortcutService } from "app/core/services/hotkey.service";

import { HotkeyModule } from "angular2-hotkeys";
import 'rxjs/add/operator/toPromise';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(appRouter),
        HotkeyModule.forRoot()
    ],
    providers: [
        AuthGuard,
        DataService, 
        AuthenService,
        NotificationService,
        UtilityService,
        UploadService,
        ShortcutService
      ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private _injecttor: Injector){
        InjectableObject(_injecttor)
    }

 }
