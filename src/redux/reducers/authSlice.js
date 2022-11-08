import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: false,
    username: ''
  },
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  }
});

export const { setAuth, setUsername } = authSlice.actions;

export default authSlice.reducer;
