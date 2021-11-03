import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authenticationSlice from './authenticationSlice';
import profilesSlice from './profilesSlice';
import ToastMiddleware from '../middlewares/ToastMiddleware';

export default configureStore({
  reducer: {
    authenticationSlice: authenticationSlice,
    profilesSlice: profilesSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ToastMiddleware)
});
