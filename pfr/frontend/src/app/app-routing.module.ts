import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ConnectedGuardService } from './auth/connected-guard.service';
import { GetDirectionRegionalComponent } from './DirectionRegional/get-direction-regional/get-direction-regional.component';

const routes: Routes = [
  {path:'sign-in', component: SignInComponent}, 
  {path: 'home', component: HomeComponent, canActivate : [ConnectedGuardService]},
  { path: 'get-direction-regional', component: GetDirectionRegionalComponent , canActivate: [ConnectedGuardService] },
  {path:'' ,redirectTo:'/home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing: true,
    useHash: true
  }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
