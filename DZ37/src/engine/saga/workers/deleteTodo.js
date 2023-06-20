import { put, call } from 'redux-saga/effects';
import { todosActions } from "../../core/slice";

export function* callDeleteTodoWorker(action) {
   const response = yield call(() => {
      return JSON.parse(localStorage.getItem('items')) || [];
   })
   console.log(response)
   const newResponse = yield call(() => {
      return response.filter((item) => item.id !== action.payload.id);
   })
   console.log(newResponse)
   localStorage.setItem('items', JSON.stringify(newResponse));
   yield put(todosActions.addItems(newResponse));
}