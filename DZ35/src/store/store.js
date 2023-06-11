import { configureStore } from '@reduxjs/toolkit';
import personReducer from './slices';

const store = configureStore({
   reducer: {
      person: personReducer,
   },
});

export default store;