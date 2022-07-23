import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../backend';

export const fetchAllTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (arg, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API}/todos/`);
      return res.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const createTodo = createAsyncThunk(
  'todos/createTodo',
  async (data, { rejectWithValue }) => {
    try {
      const { newTodo, userInfo } = data;
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const res = await axios.post(
        `${API}/todos/${userInfo._id}`,
        newTodo,
        config
      );
      return res.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateTodo = createAsyncThunk(
  'user/updateTodo',
  async (data, { rejectWithValue }) => {
    const { todo, userInfo } = data;
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.put(
        `${API}/todos/${todo._id}/${userInfo._id}`,
        todo,
        config
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
