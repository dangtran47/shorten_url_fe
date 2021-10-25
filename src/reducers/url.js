import {
  CREATE_SHORTEN_URL_SUCCESS,
  FETCH_ORIGINAL_URL_SUCCESS,
  CREATE_SHORTEN_URL_FAILED,
  FETCH_ORIGINAL_URL_FAILED,
  FETCH_ALL_URLS_SUCCESS,
  FETCH_ALL_URLS_FAILED,
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
    default:
      return state;
  }
};

export default urlReducer;
