import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'; 
import { Task } from '../../models/task.model'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tasks: Task[] = []; 
  displayedTasks: Task[] = []; 
  currentPage: number = 1; 
  tasksPerPage: number = 5; 
  totalTasks: number = 0; 

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  
  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
      this.totalTasks = tasks.length;
      this.updateDisplayedTasks();
    });
  }

  
  updateDisplayedTasks(): void {
    const startIndex = (this.currentPage - 1) * this.tasksPerPage;
    const endIndex = startIndex + this.tasksPerPage;
    this.displayedTasks = this.tasks.slice(startIndex, endIndex);
  }

  
  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.updateDisplayedTasks();
  }

  
  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== id); 
      this.totalTasks = this.tasks.length; 
      this.updateDisplayedTasks(); 
    });
  }
}