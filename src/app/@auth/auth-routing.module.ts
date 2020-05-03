import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    {
        path: '',
        component: SignInComponent,
        pathMatch: 'full'
    }, 
]

@NgModule({
imports:[RouterModule.forChild(routes)],
exports: [RouterModule]

})

export class AuthRoutingModule {}