import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './reducers/locationSlice';
import searchReducer from './reducers/searchSlice';
import authReducer from "./reducers/authSlice";
import chatReducer from "./reducers/chatSlice";

export default configureStore({
  reducer: {
    location: locationReducer,
    search: searchReducer,
    auth: authReducer,
    chat: chatReducer
  },
});
