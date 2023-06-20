import { todosActions } from "./slice";

export const handleAddTodo = (event) => {
   return (dispatch, getState) => {

      const items = getState().todos.items;
      event.preventDefault();
      const input = event.target.getElementsByClassName('form__input')[0];
      const text = input.value;
      const newItems = [
         ...items,
         { id: Math.random(), text }
      ];
      const cancelFunction = dispatch(todosActions.addItems(newItems, { delayMS: 1000 }));
      localStorage.setItem('items', JSON.stringify(newItems));
      input.value = ''
   }
}
