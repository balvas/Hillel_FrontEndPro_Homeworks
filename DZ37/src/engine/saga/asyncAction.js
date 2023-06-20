import { createAction } from '@reduxjs/toolkit';

export const todosAsyncAction = Object.freeze({
   getTodosAsync: createAction('GET_TODOS_ASYNC'),
   addTodoAsync: createAction('ADD_TODOS_ASYNC'),
   deleteTodoAsync: createAction('DELETE_TODOS_ASYNC'),
   editTodoAsync: createAction('EDIT_TODOS_ASYNC'),
})
