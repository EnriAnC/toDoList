import { Component, Input } from '@angular/core';


interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() tasks:Task[] = [
    {
      id:1,
      title:"tarea1",
      description:"descripcion de la tarea",
      completed:false
    },
    {
      id:1,
      title:"tarea1",
      description:"descripcion de la tarea",
      completed:false
    },
    {
      id:1,
      title:"tarea1",
      description:"descripcion de la tarea",
      completed:false
    }
  ];

  constructor(){

  }

  newTask: Task = { id:1, title: "", description: "", completed:false };

  onSubmit():void {
    this.tasks.push(this.newTask);
    this.newTask = { id:1, title: "", description: "", completed:false};
  }
}
