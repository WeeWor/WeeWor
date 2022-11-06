import {createSlice} from '@reduxjs/toolkit';

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    latitude: 0,
    longitude: 0,
    address: ''
  },
  reducers: {
    setLatitude: (state, action) => {
      state.latitude = action.payload;
    },
    setLongitude: (state, action) => {
      state.longitude = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
  }
});

export const { setLatitude, setLongitude, setAddress } = locationSlice.actions;

export default locationSlice.reducer;
