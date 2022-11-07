import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './reducers/locationSlice';
import searchReducer from './reducers/searchSlice';

export default configureStore({
  reducer: {
    location: locationReducer,
    search: searchReducer
  },
});
