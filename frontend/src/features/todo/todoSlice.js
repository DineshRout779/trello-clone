import { createSlice } from '@reduxjs/toolkit';
import { createTodo, fetchAllTodos, updateTodo } from './todoActions';

const initialState = {
  todos: [],
  error: null,
  success: false,
  loading: false,
  showDetailed: false,
  currentTodo: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    showTodo: (state, { payload }) => {
      state.showDetailed = true;
      state.currentTodo = payload;
    },
    removeTodo: (state, { payload }) => {
      state.showDetailed = false;
      state.currentTodo = null;
    },
  },
  extraReducers: {
    //fetch todos
    [fetchAllTodos.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchAllTodos.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.todos = payload;
    },
    [fetchAllTodos.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // create todo
    [createTodo.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [createTodo.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.todos.push(payload);
    },
    [createTodo.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // update todo
    [updateTodo.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [updateTodo.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.todos = state.todos.map((item) =>
        item._id === payload._id ? payload : item
      );
    },
    [updateTodo.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { showTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
