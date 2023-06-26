import { configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
// Engine
import destination from '../core/destination/slice';
import hotels from '../core/hotels/slice';
import { rootSaga } from './rootSaga';
// Middleware
const sagaMiddleware = createSagaMiddleware();
const {
  createReduxHistory,
  routerMiddleware,
  routerReducer,
} = createReduxHistoryContext({ history: createBrowserHistory() });

export const store = configureStore({
  reducer: {
    router: routerReducer,
    destination,
    hotels,
  },
  middleware: () => [sagaMiddleware, routerMiddleware],
});
export const history = createReduxHistory(store);
// then run the saga
sagaMiddleware.run(rootSaga);
