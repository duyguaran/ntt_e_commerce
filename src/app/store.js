import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../feautures/productsSlice.js'

export const store = configureStore({
  reducer: {
    products: productsReducer
  },
});