import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './features/modal/modalSlice';
import serviceSlice from './features/service/serviceSlice';

export const store = configureStore({
  reducer: {service:serviceSlice,modal:modalSlice},
})