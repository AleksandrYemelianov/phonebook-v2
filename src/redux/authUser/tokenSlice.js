import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: ''
}

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload
    },
  },
})

export const { setToken } = tokenSlice.actions

export default tokenSlice.reducer
