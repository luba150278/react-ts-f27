import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/auth.reducer'
import errorReducer from './reducers/error.reducer'
import loaderReducer from './reducers/loader.reducer'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    error: errorReducer,
    loader: loaderReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch