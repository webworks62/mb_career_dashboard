import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { sitesRoutes } from './components/pages/sites.routes';

export const routes: Routes = [
   ...sitesRoutes,
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
