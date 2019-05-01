import {
  GET_MODELS_SUCCESS,
  GET_MODELS,
  CLEAR_MODELS,
} from "../constants/actionTypes";

export function getModels() {
  return {
    type: GET_MODELS,
  };
}

export function clearModels() {
  return {
    type: CLEAR_MODELS,
  };
}

export function receiveModels(models) {
  return {
    type: GET_MODELS_SUCCESS,
    models,
  };
}
