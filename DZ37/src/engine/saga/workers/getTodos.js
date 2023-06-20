import { put, call } from 'redux-saga/effects';
import { todosActions } from "../../core/slice";

export function* callGetTodosWorker(action) {
   const response = yield call(() => {
      return JSON.parse(localStorage.getItem('items')) || [];
   })
   yield put(todosActions.addItems(response));
}