import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app/app.component';
import { NavbarComponent } from './app/components/navbar/navbar.component';
import { HomeComponent } from './app/components/home/home.component';
import { AddTaskComponent } from './app/components/add-task/add-task.component';
import { EditTaskComponent } from './app/components/edit-task/edit-task.component';
import { ViewTaskComponent } from './app/components/view-task/view-task.component';
import { PaginationComponent } from './app/components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddTaskComponent,
    EditTaskComponent,
    ViewTaskComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}