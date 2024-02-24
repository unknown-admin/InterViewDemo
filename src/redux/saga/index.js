import {put, takeLatest, call} from 'redux-saga/effects';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, EVENT_SUCCESS, EVENT_FAILED, EVENT_REQUEST} from '../types/index';
import {setLoading} from '../actions';
import {loginCall, eventCall} from '../../apis/Api';

function* login({params}) {
  try {
    yield put(setLoading(true));
    const loginResponse = yield call(loginCall, params);
    if (loginResponse?.success) {
      yield put({type: LOGIN_SUCCESS, payload: loginResponse?.data});
    } else {
      yield put({type: LOGIN_FAILED, payload: loginResponse?.message});
    }
  } catch (error) {
    console.error(error);
    yield put({type: LOGIN_FAILED, payload: error});
    throw error;
  } finally {
    yield put(setLoading(false));
  }
}

function* events({params}) {
  try {
    yield put(setLoading(true));
    const eventResponse = yield call(eventCall, params);
    if (eventResponse?.success) {
      yield put({type: EVENT_SUCCESS, payload: eventResponse?.data?.events});
    } else {
      yield put({type: EVENT_FAILED, payload: eventResponse?.message});
    }
  } catch (error) {
    console.error(error);
    yield put({type: EVENT_FAILED, payload: error});
    throw error;
  } finally {
    yield put(setLoading(false));
  }
}

function* listnerSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
  yield takeLatest(EVENT_REQUEST, events)
}

export default function* rootSaga() {
  yield listnerSaga();
}
