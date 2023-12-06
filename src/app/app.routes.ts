import { Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { BooksComponent } from './component/books/books.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { animation: 'openClosePage' },
  },
  {
    path: 'third-route',
    component: BooksComponent,
    data: { animation: 'openClosePage' },
  },
];
