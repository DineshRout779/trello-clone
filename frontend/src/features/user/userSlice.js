import { createSlice } from '@reduxjs/toolkit';
import { login, signUp } from './userActions';

const initialState = {
  userInfo: JSON.parse(localStorage.getItem('user')) || null,
  error: null,
  success: false,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('user'); // deletes token from storage
      state.loading = false;
      state.userInfo = null;
      state.error = null;
    },
  },
  extraReducers: {
    //signup
    [signUp.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successful
      console.log(payload);
    },
    [signUp.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // login
    [login.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;