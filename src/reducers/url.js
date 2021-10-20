import {
  CREATE_SHORTEN_URL_SUCCESS,
  FETCH_ORIGINAL_URL_SUCCESS,
  CREATE_SHORTEN_URL_FAILED,
  FETCH_ORIGINAL_URL_FAILED,
} from "../actions";

const urlReducer = (state = {}, action) => {
  console.log("URL REDUCER");
  console.log(action);

  switch (action.type) {
    case CREATE_SHORTEN_URL_SUCCESS:
      return action.payload;
    case CREATE_SHORTEN_URL_FAILED:
      return action.payload;
    case FETCH_ORIGINAL_URL_SUCCESS:
      return action.payload;
    case FETCH_ORIGINAL_URL_FAILED:
      return action.payload;
    default:
      return state;
  }
};

export default urlReducer;
