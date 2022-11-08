import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './reducers/locationSlice';
import searchReducer from './reducers/searchSlice';
import authReducer from "./reducers/authSlice";

export default configureStore({
  reducer: {
    location: locationReducer,
    search: searchReducer,
    auth: authReducer
  },
});
