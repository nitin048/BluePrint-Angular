import { Routes } from '@angular/router';
import { ContainerComponent } from '../Components/container/container.component';
import { LoginComponent } from '../Components/login/login.component';


export const routes: Routes = [
  { path: 'container',  component: ContainerComponent },
  { path: 'login',  component: LoginComponent },
  { path: '', redirectTo: '/container', pathMatch: 'full' }
];