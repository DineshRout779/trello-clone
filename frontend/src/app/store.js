import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import todoReducer from '../features/todo/todoSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
