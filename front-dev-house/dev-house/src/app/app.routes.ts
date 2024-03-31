import { Routes } from '@angular/router';
import { SessionComponent } from './session/session.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: SessionComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }
];
