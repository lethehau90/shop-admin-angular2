import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRouter } from './product.routes';
import { PaginationModule, ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { Daterangepicker } from 'ng2-daterangepicker';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { SimpleTinyComponent } from '../../shared/simple-tiny/simple-tiny.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRouter,
    FormsModule,
    PaginationModule,
    ModalModule,
    Daterangepicker,
    MultiselectDropdownModule
  ],
  declarations: [ProductComponent, SimpleTinyComponent]
})
export class ProductModule { }