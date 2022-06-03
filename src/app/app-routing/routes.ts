import { Routes } from '@angular/router';
import { ContainerComponent } from '../Components/container/container.component';


export const routes: Routes = [
  { path: 'container',  component: ContainerComponent },
  { path: '', redirectTo: '/container', pathMatch: 'full' }
];