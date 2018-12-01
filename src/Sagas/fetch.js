import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, receiveApiData } from "../actions/action"
import { fetchData } from "../services/api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
  try {
    // do api call
    console.log("GET API Call");
    const data = yield call(fetchData);
    console.log(data);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* StudentFetchSaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
