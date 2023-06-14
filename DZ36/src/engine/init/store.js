import { configureStore } from "@reduxjs/toolkit";
// import { logger } from "redux-logger";
import thunk from "redux-thunk";
// Engine
import todosReducer from '../core/todos/slice';
import { delay } from './middlewares';

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
    middleware: [
        // logger,
        delay,
        thunk
    ]
    // middleware: (getDefaultMiddleware) => {
    //     return [
    //         ...getDefaultMiddleware()
    //         // loger
    //     ]
    // },
})
