// Core
import { call, put, delay } from 'redux-saga/effects';
import { push } from 'redux-first-history';
// Parts
import { setLoading, setItems } from '../../slice';
import api from '../../../../config/api';
import { links } from '../../../../config/links';

export function* callGetHotelsWorker(action) {
  const { payload } = action;
  console.log(payload);
  const { destinationItems } = payload;
  try {

    yield put(setLoading(true));
    const {
      // eslint-disable-next-line camelcase
      check_in: { $d: check_in },
      // eslint-disable-next-line camelcase
      check_out: { $d: check_out },
      ...rest
    } = payload;
    // eslint-disable-next-line camelcase
    const city = destinationItems.find(obj => obj.value === payload.destination);
    const { data, status } = yield call(api.getHotels, { check_in, check_out, ...rest });
    const selectedData = data.filter(item => item.city === city.label)
    if (status === 200) {
      yield put(setItems(selectedData));
      yield delay(2000);
      yield put(push(links.hotels));
    }
    yield put(setLoading(false));
  } catch (e) {
    console.warn(e);
  }
}
