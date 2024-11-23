import { Routes } from '@angular/router';
import { BikeappComponent } from './bikeapp/bikeapp.component';

export const routes: Routes = [
   
    { path: '', redirectTo: '/new-page', pathMatch: 'full' }, // Default redirect
  { path: 'new-page', component: BikeappComponent },
];
