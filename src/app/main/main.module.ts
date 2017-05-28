import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { mainRoutes } from './main.routes';
import { AuthenService } from '../core/services/authen.service';
import { UtilityService } from '../core/services/utility.service';
import {SidebarMenuComponent} from '../shared/sidebar-menu/sidebar-menu.component';
import {TopMenuComponent} from '../shared/top-menu/top-menu.component';
import { DataService } from '../core/services/data.service';

@NgModule({
    imports: [
        CommonModule,
        UserModule,
        HomeModule,
        RouterModule.forChild(mainRoutes)
    ],
    declarations: [MainComponent, SidebarMenuComponent, TopMenuComponent],
    providers: [AuthenService, UtilityService,DataService]
    
})
export class MainModule { }
