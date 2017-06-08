import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
//import { BaseComponent } from '../core/base/component.base';
import { BaseModule } from '../core/base/component.module';

const loginRouter: Routes = [
    { path: '', component: LoginComponent }
]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(loginRouter),
        FormsModule,BaseModule
    ],
    //providers: [BaseComponent],
    declarations: [LoginComponent]
})
export class LoginModule { }