import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderAddComponent } from './order-add/order-add.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderRouter } from './order.routes';
import { Daterangepicker } from 'ng2-daterangepicker';
import { PaginationModule, ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    OrderRouter,
    Daterangepicker,
    FormsModule,
    PaginationModule, ModalModule
  ],
  declarations: [OrderComponent, OrderAddComponent, OrderDetailComponent]
})
export class OrderModule { }
