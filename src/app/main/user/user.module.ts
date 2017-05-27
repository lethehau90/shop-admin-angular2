import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../core/services/data.service';
import { NotificationService } from '../../core/services/notification.service';
import { UploadService } from '../../core/services/upload.service';
import { AuthenService } from '../../core/services/authen.service';
import { UtilityService } from '../../core/services/utility.service';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { Daterangepicker } from 'ng2-daterangepicker';

const UserRouter: Routes = [
    { path: 'index', component: UserComponent }
]

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(UserRouter),
        PaginationModule.forRoot(),
        ModalModule.forRoot(),
        MultiselectDropdownModule,
        Daterangepicker
    ],
    declarations: [UserComponent],
    providers: [DataService, NotificationService, UploadService, AuthenService, UtilityService]
})
export class UserModule { }
