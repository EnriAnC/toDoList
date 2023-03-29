import { Component, Input } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';

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
      id:0,
      title:"tarea1",
      description:"descripcion de la tarea",
      completed:false
    },
    {
      id:1,
      title:"tarea2",
      description:"descripcion de la tarea",
      completed:false
    },
    {
      id:2,
      title:"tarea3",
      description:"descripcion de la tarea",
      completed:false
    }
  ];

  @Input() tasksCompleted:Task[] = [
    {
      id:3,
      title:"tarea4",
      description:"descripcion de la tarea",
      completed:true
    }
  ];

  constructor(){

  }

  newTask: Task = { id:1, title: "", description: "", completed:false };

  onSubmit():void {
    this.tasks.push(this.newTask);
    this.newTask = { id:1, title: "", description: "", completed:false};
  }

  onSelectionChange(event: MatSelectionListChange) {
    const selected = event.options.map(o => {
      o.value.completed = o.selected
      if (o.value.completed){
        this.tasks = this.tasks.filter(x => x.id !== o.value.id)
        this.tasksCompleted.push(o.value)
      }
      else {
        this.tasksCompleted = this.tasksCompleted.filter(x => x.id !== o.value.id)
        this.tasks.push(o.value)
      }
      return o.value.completed
    });
    console.log('Selected items:', selected[0]);
  }
  
}
