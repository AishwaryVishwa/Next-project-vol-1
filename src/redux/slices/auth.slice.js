import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: {},
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   setUserData:(state,action) =>{
    const {payload} = action || {};
    state.userData = payload;
   }
  }
})

export const {setUserData } = authSlice.actions

export default authSlice.reducer