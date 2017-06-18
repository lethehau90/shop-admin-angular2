import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { mainRoutes } from './main.routes';
import { SidebarMenuComponent } from '../shared/sidebar-menu/sidebar-menu.component';
import { TopMenuComponent } from '../shared/top-menu/top-menu.component';
import { UserModule } from './user/user.module';

@NgModule({
    imports: [
        CommonModule,
        UserModule,
        RouterModule.forChild(mainRoutes)
    ],
    declarations: [MainComponent, SidebarMenuComponent, TopMenuComponent],

})
export class MainModule { }
