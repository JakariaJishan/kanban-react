import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/counterSlice'
export const store = configureStore({
  reducer: {
    todo: todoReducer
  },
})