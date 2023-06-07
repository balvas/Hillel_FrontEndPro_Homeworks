import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
   name: 'todos',
   initialState: [],
   reducers: {
      addTodo: (state, action) => {
         const newTodo = {
            id: Math.random(),
            taskText: action.payload.todo
         }
         state.push(newTodo);
      },
      deleteTodo: (state, action) => {
         return state.filter((item) => item.id !== action.payload.id);
      },
      // editTodo: (state, action) => {
      //    const { id, newText } = action.payload;
      //    const todo = state.todos.find(todo => todo.id === id);
      //    if (todo) {
      //       todo.text = newText;
      //    }
      // },

   }
});

export const todosArray = state => state.todo.todos;

export const { addTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;