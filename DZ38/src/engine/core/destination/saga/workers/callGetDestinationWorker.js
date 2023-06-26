// Core
import { call, put, delay } from 'redux-saga/effects';
// Parts
import { setLoading, setItems } from '../../slice';
import api from '../../../../config/api';

export function* callGetDestinationWorker() {
  try {
    yield put(setLoading(true));
    const { data } = yield call(api.getDestination);
    yield put(setItems(data));
    yield delay(2000);
    yield put(setLoading(false));
  } catch (e) {
    console.warn(e);
  }
}
