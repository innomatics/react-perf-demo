import { GET_MODELS_SUCCESS, CLEAR_MODELS } from "../constants/actionTypes";

const models = (state = { models: [] }, action) => {
  switch (action.type) {
    case CLEAR_MODELS:
      return {
        ...state,
        models: [],
      };
    case GET_MODELS_SUCCESS:
      return {
        ...state,
        models: action.models,
      };
    default:
      return state;
  }
};

export default models;
