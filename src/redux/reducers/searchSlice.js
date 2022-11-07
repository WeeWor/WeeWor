import {createSlice} from '@reduxjs/toolkit';

export const locationSlice = createSlice({
  name: 'search',
  initialState: {
    keyword: '',
    unit: '',
    province: '',
    district: ''
  },
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    setUnit: (state, action) => {
      state.unit = action.payload;
    },
    setProvince: (state, action) => {
      state.province = action.payload;
    },
    setDistrict: (state, action) => {
      state.district = action.payload;
    }
  }
});

export const { setKeyword, setUnit, setProvince, setDistrict } = locationSlice.actions;

export default locationSlice.reducer;
