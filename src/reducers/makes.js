import { GET_MAKES_SUCCESS, CLEAR_MAKES } from "../constants/actionTypes";

const makes = (state = { makes: [] }, action) => {
  switch (action.type) {
    case CLEAR_MAKES:
      return {
        ...state,
        makes: [],
      };
    case GET_MAKES_SUCCESS:
      return {
        ...state,
        makes: action.makes,
      };
    default:
      return state;
  }
};

export default makes;
