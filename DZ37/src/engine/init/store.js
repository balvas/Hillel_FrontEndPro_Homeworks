import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import todosReducer from '../core/slice';
import { delay } from './middlewares';
import { rootSaga } from "./root.saga";

export const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
   reducer: {
      todos: todosReducer,
   },
   middleware: [
      delay,
      thunk,
      sagaMiddleware
   ]
})
sagaMiddleware.run(
   rootSaga
)