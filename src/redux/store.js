import { configureStore } from '@reduxjs/toolkit'
import auth from './slices/auth.slice'
export const makeStore = () => {
  return configureStore({
    reducer: {
        auth
    }
  })
}