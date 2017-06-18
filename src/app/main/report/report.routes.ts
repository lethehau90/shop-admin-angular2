import { Routes, RouterModule } from '@angular/router';
import { RevenueComponent } from './revenue/revenue.component';
const routes : Routes = [
    { path : '', redirectTo : 'index', pathMatch : 'full' },
    { path: 'index', component : RevenueComponent },
    { path: 'revenue', component: RevenueComponent }
];
export const ReportRouter = RouterModule.forChild(routes);