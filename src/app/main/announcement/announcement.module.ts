import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementComponent } from './announcement.component';
import { AnnouncementRouter } from './announcement.routes';
import { PaginationModule, ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    PaginationModule.forRoot(),
    AnnouncementRouter,
    ModalModule.forRoot()
  ],
  declarations: [AnnouncementComponent],
  providers:[]
})
export class AnnouncementModule { }