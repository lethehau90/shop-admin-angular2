import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RoleComponent } from './role.component';
import { Routes, RouterModule } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';

const roleRouter: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: RoleComponent }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(roleRouter),
    PaginationModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [RoleComponent]
})
export class RoleModule { }
