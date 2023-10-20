import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'

export const store = configureStore({
    reducer:{
        userReducer:userReducer
    }})
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch