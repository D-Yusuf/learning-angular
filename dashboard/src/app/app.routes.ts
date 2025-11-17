import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'reports', component: ReportsComponent },
    {path: 'leave-request', component: LeaveRequestComponent },

    
];
