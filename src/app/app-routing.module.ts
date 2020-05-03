import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './@pages/dashboard/dashboard.component';
import { AuthGuard } from './@auth/auth.guard';



const routes: Routes = [

{
  path:'login',
  loadChildren: () => import('./@auth/auth.module').then(m => m.AuthModule)
},

{
  path:'',
  redirectTo: 'login',
  pathMatch:'full'
},

{
  path: 'dashboard',
  component: DashboardComponent, 
  canActivate: [
    AuthGuard
   ]
 },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
