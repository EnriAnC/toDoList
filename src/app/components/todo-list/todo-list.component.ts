import { Component, Input } from '@angular/core';
import { MatSelectionListChange, MatListOption } from '@angular/material/list';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import { configureStore } from '@reduxjs/toolkit';
import { addTask, deleteTask, updateTask } from '../../store/reducers/todoListSlice';
import { store } from '../../store/store';

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

  store = store

  newTask: Task = { id:1, title: "", description: "", completed:false };

  onSubmit():void {
    this.tasks.push(this.newTask);
    this.newTask = { id:new Date().valueOf(), title: "", description: "", completed:false};
    this.store.dispatch(addTask({id:new Date().valueOf(), title: "", description: "", completed:false}))
    console.log(this.store)
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
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    if (this.tasks) moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    if (this.tasksCompleted) moveItemInArray(this.tasksCompleted, event.previousIndex, event.currentIndex);
  }
}
