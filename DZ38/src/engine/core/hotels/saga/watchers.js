// Core
import { takeEvery } from 'redux-saga/effects';
// Parts
import { callGetHotelsWorker } from './workers';
import { getHotelsAsync } from './asyncActions';

export function* hotelsWatcher() {
  yield takeEvery(getHotelsAsync.type, callGetHotelsWorker);
}
