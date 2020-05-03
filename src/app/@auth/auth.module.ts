import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import {MatSelectModule} from '@angular/material/select'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { HttpClientModule } from '@angular/common/http';




const MAT_MODULES =  [
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
  ];



@NgModule({
    imports:[
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ...MAT_MODULES
        
    ],


    declarations: [
       SignInComponent
    ],
   

})
export class AuthModule {}