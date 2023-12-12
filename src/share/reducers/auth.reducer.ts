import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  token: string;
  username: string;
  id: string;
}

const initialState: AuthState = {
  token: '',
  username: '',
  id: '',
};
interface IRes {
  username: string;
  email: string;
  id: number | string;
  bio: string;
  image: string;
  token: string;
}
export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    auth: (state, action: PayloadAction<IRes>) => {
      const { username, token, id } = action.payload;
      localStorage.setItem('username', username);
      localStorage.setItem('token', token);
      localStorage.setItem('id', String(id));
      return { ...state, token, username, id: String(id) };
    },
    logout: () => {
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      return { ...initialState };
    },
    checkAuth: (state) => {
      if (localStorage.getItem('token')) {
        return {
          ...state,
          token: localStorage.getItem('token') || '',
          username: localStorage.getItem('username') || '',
          id: localStorage.getItem('id') || '',
        };
      }
    },
  },
});

export const { auth, logout, checkAuth } = authSlice.actions;

export default authSlice.reducer;
