import {createSlice} from '@reduxjs/toolkit';

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    latitude: 0,
    longitude: 0
  },
  reducers: {
    setLatitude: (state, action) => {
      state.latitude = action.payload;
    },
    setLongitude: (state, action) => {
      state.longitude = action.payload;
    },
  }
});

export const { setLatitude, setLongitude } = locationSlice.actions;

export default locationSlice.reducer;
