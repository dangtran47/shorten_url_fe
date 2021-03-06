import {
  CREATE_SHORTEN_URL_SUCCESS,
  FETCH_ORIGINAL_URL_SUCCESS,
  CREATE_SHORTEN_URL_FAILED,
  FETCH_ORIGINAL_URL_FAILED,
  FETCH_ALL_URLS_SUCCESS,
  FETCH_ALL_URLS_FAILED,
  SIGN_IN_REQUEST,
  REGISTER_USER_REQUEST,
  SIGN_OUT,
} from '../actions';

const initialState = {
  userUrls: [],
  shortenUrl: '',
};

const urlReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SHORTEN_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case CREATE_SHORTEN_URL_FAILED:
      return {
        ...state,
        ...action.payload,
        shortenUrl: '',
      };
    case FETCH_ORIGINAL_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case FETCH_ORIGINAL_URL_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    case FETCH_ALL_URLS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case FETCH_ALL_URLS_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    case SIGN_OUT:
    case SIGN_IN_REQUEST:
    case REGISTER_USER_REQUEST:
      return {};
    default:
      return state;
  }
};

export default urlReducer;
