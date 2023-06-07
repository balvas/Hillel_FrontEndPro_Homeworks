import { configureStore } from '@reduxjs/toolkit';
import counter from '../core/counter/counterSlice';

export const store = configureStore({
   reducer: {
      counter: counter,
   }
})