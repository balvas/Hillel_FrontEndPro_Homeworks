import { put, select } from 'redux-saga/effects';
import { todosActions } from "../../core/slice";

export function* callEditTodosWorker(action) {
   
   const items = yield select((state) => state.todos.items); 
   const itemId = action.payload.id;
   const itemText = action.payload.itemText;
   const updatedItems = items.map((item) => {
      if (item.id === itemId) {
         return { ...item, text: itemText };
      }
      return item;
   });

   localStorage.setItem('items', JSON.stringify(updatedItems));

   yield put(todosActions.addItems(updatedItems));
}
