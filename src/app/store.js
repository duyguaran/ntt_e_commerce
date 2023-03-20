import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../feautures/productsSlice.js'

export const store = configureStore({
  reducer: {
    productsSlice: productsReducer
  },
});

export default store