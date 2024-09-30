import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';  
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../models/task.model';
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  taskForm!: FormGroup;
  taskId!: number;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getTaskById(this.taskId).subscribe((task: Task) => {
      this.taskForm = this.fb.group({
        assignedTo: [task.assignedTo, Validators.required],
        status: [task.status, Validators.required],
        priority: [task.priority, Validators.required],
        dueDate: [task.dueDate, Validators.required],
        comments: [task.comments]
      });
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      this.taskService.updateTask({ id: this.taskId, ...this.taskForm.value }).subscribe(() => {
        this.router.navigate(['/']); // Redirect after successful update
      });
    }
  }
}