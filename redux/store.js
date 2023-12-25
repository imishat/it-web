import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cart/cartSlice';
import modalSlice from './features/modal/modalSlice';
import serviceSlice from './features/service/serviceSlice';

export const store = configureStore({
  reducer: {service:serviceSlice,modal:modalSlice,cart:cartSlice},
})