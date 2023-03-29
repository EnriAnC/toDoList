import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TaskComponent } from './todo-list/task/task.component';
import { TaskFilterComponent } from './task-filter/task-filter.component';
import { TaskSearchComponent } from './task-search/task-search.component';
import { ListStatisticsComponent } from './list-statistics/list-statistics.component';
import { NotifyComponent } from './notify/notify.component';
import { TaskConfigComponent } from './task-config/task-config.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

import { MatButtonModule  } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TaskComponent,
    TaskFilterComponent,
    TaskSearchComponent,
    ListStatisticsComponent,
    NotifyComponent,
    TaskConfigComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonToggleModule,
    MatTabsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
