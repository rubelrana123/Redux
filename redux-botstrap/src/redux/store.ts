import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./features/Counter/counter.slice"
import taskReducer from "./features/tasks/taskSlice"
import userReducer from "./features/users/userSlice"
import logger from './middlewares/logger';
export const store = configureStore({
  reducer: {
     counter : counterReducer,
     todo : taskReducer,
     userList : userReducer
  },
  
   middleware :(getDefaultMiddleware) => getDefaultMiddleware().concat(logger) 
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store