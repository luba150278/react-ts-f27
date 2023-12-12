import { createSlice } from '@reduxjs/toolkit';

export interface ILoad {
  isLoading: boolean;
}
const initialState: ILoad = {
  isLoading: false
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    startLoading: () => {
      return {isLoading: true};
    },
    stopLoading: () => {
      return {isLoading: false};
    }
  },
});

export const { startLoading, stopLoading } = loaderSlice.actions;

export default loaderSlice.reducer;
