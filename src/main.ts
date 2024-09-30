import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './app/components/navbar/navbar.component';
import { HomeComponent } from './app/components/home/home.component';
import { AddTaskComponent } from './app/components/add-task/add-task.component';
import { EditTaskComponent } from './app/components/edit-task/edit-task.component';
import { ViewTaskComponent } from './app/components/view-task/view-task.component';
import { PaginationComponent } from './app/components/pagination/pagination.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Define your application config
const appConfig = {
  providers: [
    importProvidersFrom(
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule,
      NavbarComponent,
      HomeComponent,
      AddTaskComponent,
      EditTaskComponent,
      ViewTaskComponent,
      PaginationComponent
    ), provideAnimationsAsync(),
  ],
};

// Bootstrap the application
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
