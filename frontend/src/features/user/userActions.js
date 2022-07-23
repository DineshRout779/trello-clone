import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../backend';

export const signUp = createAsyncThunk(
  'user/signup',
  async (user, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await axios.post(`${API}/auth/signup`, user, config);
      if (res.data.user)
        localStorage.setItem('user', JSON.stringify(res.data.user));
      return res;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (user, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post(`${API}/auth/login`, user, config);
      // store user's token in local storage
      localStorage.setItem('user', JSON.stringify(data.user));
      return data.user;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
