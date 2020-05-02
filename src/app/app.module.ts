import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { DashboardComponent } from './@pages/dashboard/dashboard.component';
import { NavbarComponent } from './@components/navbar/navbar.component';
import {MatSelectModule} from '@angular/material/select'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TableComponent } from './@components/table/table.component';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatTooltipModule} from '@angular/material/tooltip';
import { UserFilterPipe } from './@core/pipes/user-filter.pipe';
import { DialogComponent } from './@components/dialogs/add/dialog.component';
import { UpdateComponent } from './@components/dialogs/update/update/update.component';



const MAT_MODULES =  [
  MatInputModule,
  MatCheckboxModule,
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
  MatToolbarModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatTooltipModule
  
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    TableComponent,
    DialogComponent,
    UserFilterPipe,
    UpdateComponent,

    



  
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ...MAT_MODULES
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
