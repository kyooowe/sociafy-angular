
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth-guard.service';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent, },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
    
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}