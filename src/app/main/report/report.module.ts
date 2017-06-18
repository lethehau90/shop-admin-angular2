import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ReportRouter } from './report.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevenueComponent } from './revenue/revenue.component';
import { VisitorComponent } from './visitor/visitor.component';

@NgModule({
  imports: [
    CommonModule,ReportRouter,ChartsModule
  ],
  declarations: [RevenueComponent, VisitorComponent]
})
export class ReportModule { }
