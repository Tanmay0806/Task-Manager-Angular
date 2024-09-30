import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'edit-task/:id', component: EditTaskComponent },
  { path: 'view-task/:id', component: ViewTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}