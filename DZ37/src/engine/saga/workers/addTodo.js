import { put, call } from 'redux-saga/effects';
import { todosActions } from "../../core/slice";

export function* callAddTodosWorker(action, getState) {
   const { event } = action.payload;
   const response = yield call(() => {
      return JSON.parse(localStorage.getItem('items')) || [];
   })
   const newResponse = yield call(() => {
      const input = event.target.getElementsByClassName('form__input')[0];
      const text = input.value;

      const newItems = [
         ...response,
         { id: Math.random(), text }
      ];
      localStorage.setItem('items', JSON.stringify(newItems));
      input.value = ''
      return newItems;
   })
   yield put(todosActions.addItems(newResponse));
}