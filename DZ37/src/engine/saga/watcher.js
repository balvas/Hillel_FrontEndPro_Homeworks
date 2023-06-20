import { takeEvery } from 'redux-saga/effects';
import { todosAsyncAction } from "./asyncAction";
import { callGetTodosWorker } from "./workers/getTodos";
import { callAddTodosWorker } from "./workers/addTodo";
import { callDeleteTodoWorker } from "./workers/deleteTodo";
import { callEditTodosWorker } from "./workers/editTodo";
export function* todosWatcher() {
   yield takeEvery(todosAsyncAction.getTodosAsync.type, callGetTodosWorker);
   yield takeEvery(todosAsyncAction.addTodoAsync.type, callAddTodosWorker);
   yield takeEvery(todosAsyncAction.deleteTodoAsync.type, callDeleteTodoWorker);
   yield takeEvery(todosAsyncAction.editTodoAsync.type, callEditTodosWorker);
}