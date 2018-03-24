import { Routes, RouterModule } from '@angular/router';
import { RevenueComponent } from './revenue/revenue.component';
import { VisitorComponent } from './visitor/visitor.component';
const routes : Routes = [
    { path : '', redirectTo : 'index', pathMatch : 'full' },
    { path: 'index', component : RevenueComponent },
    { path: 'revenue', component: RevenueComponent },
    { path: 'visitor', component: VisitorComponent }
];
export const ReportRouter = RouterModule.forChild(routes);