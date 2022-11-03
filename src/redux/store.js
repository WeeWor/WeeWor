import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './reducers/locationSlice';

export default configureStore({
  reducer: {
    location: locationReducer
  },
});
