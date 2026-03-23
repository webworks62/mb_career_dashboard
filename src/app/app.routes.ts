import { Routes } from '@angular/router';
import { Error404 } from './components/shared/error/error404';
import { Home } from './components/pages/Home';

export const routes: Routes = [
  // { path: '', component: Home },
  { path: '', component: Error404 },
  // {
  //   path: 'task-details/:id',
  //   component: TaskDetails,
  // },

  //error page list
  { path: 'error- 404', component: Error404 },
  { path: '**', redirectTo: 'error- 404' },
];
