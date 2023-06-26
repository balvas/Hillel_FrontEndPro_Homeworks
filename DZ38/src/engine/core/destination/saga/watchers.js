// Core
import { takeEvery } from 'redux-saga/effects';
// Parts
import { callGetDestinationWorker } from './workers';
import { getDestinationAsync } from './asyncActions';

export function* destinationWatcher() {
  yield takeEvery(getDestinationAsync.type, callGetDestinationWorker);
}
