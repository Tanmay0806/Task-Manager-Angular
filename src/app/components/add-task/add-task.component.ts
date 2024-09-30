import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private  taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      assignedTo: ['', Validators.required],
      status: ['', Validators.required],
      priority: ['', Validators.required],
      dueDate: ['', Validators.required],
      comments: ['']
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      this.taskService.addTask(this.taskForm.value).subscribe(() => {
        this.router.navigate(['/']); 
      });
    }
  }
}