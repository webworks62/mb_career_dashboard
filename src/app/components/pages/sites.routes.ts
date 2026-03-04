import { Routes } from '@angular/router';
import { MBCareers } from './mbcareers';
import { MBServices } from './mbservices';
import { Dashboards } from './Dashboards';
import { DashboardAnalysis } from './dashboard-analysis';


export const sitesRoutes: Routes = [
   {
    path: 'dashboard',
    component: Dashboards,
    children: [
      { path: 'analysis', component: DashboardAnalysis },
      { path: 'mbcareers', component: MBCareers },
      { path: 'mbservices', component: MBServices },

      // DEFAULT PAGE
      { path: '', redirectTo: 'analysis', pathMatch: 'full' },
    ],
  },
];
