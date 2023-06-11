import { createSlice } from '@reduxjs/toolkit';

const Slice = createSlice({
   name: 'person',
   initialState: null,
   reducers: {
      setPerson: (state, action) => {
         return action.payload;
      },
      clearPerson: state => {
         return null;
      },
   },
});

export const { setPerson, clearPerson } = Slice.actions;
export default Slice.reducer;
