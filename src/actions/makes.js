import {
  GET_MAKES_SUCCESS,
  GET_MAKES,
  CLEAR_MAKES,
} from "../constants/actionTypes";

export function getModels() {
  return {
    type: GET_MAKES,
  };
}

export function clearModels() {
  return {
    type: CLEAR_MAKES,
  };
}

export function receiveModels(makes) {
  return {
    type: GET_MAKES_SUCCESS,
    makes,
  };
}
