import { GET_MODELS_SUCCESS, GET_MODELS } from "../constants/actionTypes";

export function getModels() {
  return {
    type: GET_MODELS,
  };
}

export function receiveModels(models) {
  return {
    type: GET_MODELS_SUCCESS,
    models,
  };
}
