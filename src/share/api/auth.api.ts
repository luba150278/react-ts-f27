import { createAsyncThunk, SerializedError } from '@reduxjs/toolkit';
import { auth } from '../reducers/auth.reducer';
import { clearErrors, IError, setError } from '../reducers/error.reducer';
import { url } from '../url';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { startLoading, stopLoading } from '../reducers/loader.reducer';

export interface IAuthRequset {
  body: {
    email: string;
    password: string;
  };
  path: string;
}

interface IAuthResponse {
  user: {
    username: string;
    email: string;
    id: number | string;
    bio: string;
    image: string;
    token: string;
  };
}


interface IErrorResponse {
  message?: string;
  errors?: {
    body: string[];
  };
}
export const fetchAuth = createAsyncThunk(
  'auth',
  async ({ body, path }: IAuthRequset, { dispatch }) => {
    try {
      dispatch(startLoading());
      const res: AxiosResponse<IAuthResponse> = await axios.post<IAuthResponse>(
        url + path,
        { user: { ...body } },
        { headers: { 'Content-Type': 'application/json' } }
      );
      dispatch(auth(res.data.user));
      dispatch(stopLoading());
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const error: AxiosError<SerializedError> = e;

        if (error.response) {
          const errorData: IErrorResponse = error.response.data;
          dispatch(stopLoading());
          if (errorData.errors && errorData.errors.body) {
            dispatch(setError({ errors: [...errorData.errors.body] }));
          } else if (errorData.message) {
            dispatch(setError({ message: errorData.message }));
          } else {
            dispatch(setError({ message: 'Невідома помилка' } as IError));
          }
          setTimeout(() => {dispatch(clearErrors()) }, 5000)
          return;
        }
      }
      // Якщо помилка не відноситься до Axios, ви можете використовувати загальний об'єкт помилки
      dispatch(stopLoading());
      dispatch(setError({ message: 'Невідома помилка' } as IError));
      setTimeout(() => {dispatch(clearErrors()) }, 5000)
    }
  }
);
