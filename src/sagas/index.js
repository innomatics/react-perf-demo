import { put, takeLatest } from "redux-saga/effects";

import { receiveModels } from "actions";
import { GET_MAKES } from "constants/actionTypes";

import data from "fixtures/makes";

function* fetchModels() {
  yield put(receiveModels(data.makes));
}

function* rootSaga() {
  yield takeLatest(GET_MAKES, fetchModels);
}

export default rootSaga;
