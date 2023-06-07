import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
   name: 'counter',
   initialState: {
      value: 0,
   },
   reducers: {
      increment: (state) => {
         state.value = state.value + 1;
      },
      decrement: (state) => {
         state.value = state.value - 1;
      },
   }
});

export const value = state => state.counter.value;


export const {
   increment,
   decrement
} = counterSlice.actions;

export default counterSlice.reducer;