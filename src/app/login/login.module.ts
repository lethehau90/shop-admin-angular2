import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';

const loginRouter: Routes = [
    { path: '', component: LoginComponent }
]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(loginRouter),
        FormsModule
        
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }