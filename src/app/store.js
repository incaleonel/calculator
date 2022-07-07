import { configureStore } from '@reduxjs/toolkit';
import opReducer from '../features/counter/opSlices'
export const store = configureStore({
  reducer: {
    op: opReducer
  },
});
