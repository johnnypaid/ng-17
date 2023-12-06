import { Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { UsingDirectiveComponent } from './component/using-directive/using-directive.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { animation: 'openClosePage' },
  },
  {
    path: 'third-route',
    component: UsingDirectiveComponent,
    data: { animation: 'openClosePage' },
  },
];
