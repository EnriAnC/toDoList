import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface TodoListState {
  tasks: Task[];
}

const initialState: TodoListState = {
  tasks: [],
};

const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const taskIndex = state.tasks.findIndex(task => task.id === action.payload.id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = action.payload;
      }
    },
  },
});

export const { addTask, deleteTask, updateTask } = todoListSlice.actions;

export const selectTasks = (state: { todoList: TodoListState }) => state.todoList.tasks;

export const todoListReducer = todoListSlice.reducer;
