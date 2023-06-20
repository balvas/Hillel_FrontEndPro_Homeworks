import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
   name: 'todos',
   initialState: {
      items: [],
   },
   reducers: {
      addItems: {
         prepare: (payload, meta) => ({ payload, meta }),
         reducer: (state, action) => {
            state.items = action.payload;
         }
      },
      removeItem: {
         reducer: (state, action) => {
            const id = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            state.items.splice(itemIndex, 1);
         }
      }
   }
})

export const todosSelectors = {
   items: (state) => state.todos.items,
   length: (state) => state.todos.items.length,
}

export const todosActions = todosSlice.actions;
export default todosSlice.reducer;
