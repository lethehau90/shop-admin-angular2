import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard'

export const appRouter: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'main', loadChildren: './main/main.module#MainModule', canActivate: [AuthGuard] }
];