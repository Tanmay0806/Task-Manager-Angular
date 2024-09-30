export interface Task {
  id?: number; 
  assignedTo: string;
  status: string;
  priority: string;
  dueDate: Date | string;
  comments: string;
}