import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';


// Modelo de la tarea
 export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{

  tasks: Task[] = [];
  newTask: Partial<Task> = { title: '', description: '' }
  editingTaskId: number | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  // Carga todas las tareas desde el Backend
  loadTasks(): void {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
      // console.log('Tareas cargadas', this.tasks);
    })
  }

  // Mejora renderizado *ngFor
  trackByTaskId(index: number, task: Task) {
    return task.id;
  }

  // Agrega o actualiza una tarea
  addTask(): void {
    if (!this.newTask.title || !this.newTask.description) return;


  // editar una tarea existente
    if(this.editingTaskId !== null) {
      const updateTask: Task = {
        id: this.editingTaskId,
        title: this.newTask.title,
        description: this.newTask.description,
        completed: this.tasks.find(t => t.id === this.editingTaskId)?.completed || false
      };
      // console.log('Actualizando tarea:', updateTask);
      this.taskService.updateTask(updateTask).subscribe(updated => {
        const index = this.tasks.findIndex(t => t.id === updated.id);
        if (index !== -1) {
          this.tasks[index] = updated;
        }
       this.resetForm();
        // console.log('Tarea actualizada', updated);
      });

      return
  }

  // crear nueva tarea

  const newTask: Omit<Task, 'id'> = {
    title: this.newTask.title,
    description: this.newTask.description,
    completed: false
   }

    this.taskService.addTask(newTask).subscribe(created => {
      this.tasks.push(created);
      this.newTask = { title: '', description: ''}
      // console.log('Tarea Agregada', created);
    })
  
  }

  // Estado completado - pendiente
  toggleTaskStatus(task: Task): void {
    const updateTask = { ...task, completed: !task.completed};

    this.taskService.updateTask(updateTask).subscribe(updated => {
      const index = this.tasks.findIndex(t => t.id === updated.id);
      if (index !== -1) {
        this.tasks[index] = updated;
      }
      // console.log('Estado cambiado', updated);
    });
  }

  // Elimina tarea por id
  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      // console.log('Tarea eliminada', taskId);
    })
    
  }

  // Editar tarea
  editTask(task: Task): void {
    this.newTask = { title: task.title, description: task.description };
    this.editingTaskId = task.id;
  }

  // Limpia formulario 
  resetForm(): void {
    this.newTask = { title: '',  description: '' }
    this.editingTaskId = null;
  }
}
