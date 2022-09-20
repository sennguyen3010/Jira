import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './reducers/loadingReducer';
import userReducer from './reducers/userReducer';

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    loadingReducer: loadingReducer,
  },
});
