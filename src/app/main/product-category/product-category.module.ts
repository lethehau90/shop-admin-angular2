import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';

import { ProductCategoryComponent } from './product-category.component';
import { ProductCategoryRouter } from './product-category.routes';

import { Routes, RouterModule } from '@angular/router';
import { TreeModule } from 'angular-tree-component';

@NgModule({
    imports: [
        CommonModule,
        ProductCategoryRouter,
        TreeModule,
        FormsModule,
        ModalModule
    ],
    declarations: [ProductCategoryComponent],
})
export class ProductCategoryModule { }