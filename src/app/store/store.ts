import { configureStore } from '@reduxjs/toolkit';
import { todoListReducer } from './reducers/todoListSlice';

export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});