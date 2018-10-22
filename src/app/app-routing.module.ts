import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PasswordchangeComponent } from './components/passwordchange/passwordchange.component';


//guards
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'',
    redirectTo: '/login',
    pathMatch: 'full'
    
  },
  {
    path:'register',
    component : RegisterComponent
  },

  {
    path:'home',
    component : HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'reset',
    component: PasswordchangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
