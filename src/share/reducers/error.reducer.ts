import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IError {
  errors?: string[] | null;
  message?: string;
}
const initialState: IError = {
  errors: null,
  message: '',
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<IError>) => {
      if (action.payload.errors) {
        state.errors = [...action.payload.errors];
      }
      if (action.payload.message) {
        state.message = action.payload.message;
      }
    },
    clearErrors: (state) => {
      return { ...initialState };
    },
  },
});

export const { setError, clearErrors } = errorSlice.actions;

export default errorSlice.reducer;
