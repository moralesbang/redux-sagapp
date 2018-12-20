import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from './api';
import * as actions from './actions'

export function* fetchQuote() {
  try {
    const quote = yield call(api.fetchQuote);
    yield put(actions.requestQuoteSuccess(quote));
  } catch (e) {
    yield put(actions.requestQuoteFailure(e.message));
  }
}

export function* rootSaga() {
  yield takeEvery(actions.requestQuoteStart().type, fetchQuote);
}