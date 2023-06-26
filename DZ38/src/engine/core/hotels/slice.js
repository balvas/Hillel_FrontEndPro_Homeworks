// Core
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
};

const hotels = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export const { setItems, setLoading } = hotels.actions;
export default hotels.reducer;
