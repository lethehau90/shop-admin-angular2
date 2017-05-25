import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../core/services/data.service';
import { NotificationService } from '../../core/services/notification.service';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';

const UserRouter: Routes = [
    { path: 'index', component: UserComponent }
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(UserRouter),
        PaginationModule.forRoot(),
        ModalModule.forRoot()
    ],
    declarations: [UserComponent],
    providers: [DataService, NotificationService]
})
export class UserModule { }
