import { GET_MODELS_SUCCESS } from "../constants/actionTypes";

const models = (state = { models: [] }, action) => {
  switch (action.type) {
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
