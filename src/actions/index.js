export const CREATE_SHORTEN_URL_REQUEST = 'CREATE_SHORTEN_URL_REQUEST';
export const CREATE_SHORTEN_URL_SUCCESS = 'CREATE_SHORTEN_URL_SUCCESS';
export const CREATE_SHORTEN_URL_FAILED = 'CREATE_SHORTEN_URL_FAILED';

export const FETCH_ORIGINAL_URL_REQUEST = 'FETCH_ORIGINAL_URL_REQUEST';
export const FETCH_ORIGINAL_URL_SUCCESS = 'FETCH_ORIGINAL_URL_SUCCESS';
export const FETCH_ORIGINAL_URL_FAILED = 'FETCH_ORIGINAL_URL_FAILED';

export const FETCH_ALL_URLS_REQUEST = 'FETCH_ALL_URLS_REQUEST';
export const FETCH_ALL_URLS_SUCCESS = 'FETCH_ALL_URLS_SUCCESS';
export const FETCH_ALL_URLS_FAILED = 'FETCH_ALL_URLS_FAILED';

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED';

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILED = 'SIGN_IN_FAILED';

export const SIGN_OUT = 'SIGN_OUT';

export const ALERT_SUCCESS = 'ALERT_SUCCESS';
export const ALERT_ERROR = 'ALERT_ERROR';
export const ALERT_CLEAR = 'ALERT_CLEAR';

export const createShortenUrlRequest = (urlInfo) => ({
  type: CREATE_SHORTEN_URL_REQUEST,
  payload: urlInfo,
});

export const createShortenUrlSuccess = (payload) => ({
  type: CREATE_SHORTEN_URL_SUCCESS,
  payload,
});

export const createShortenUrlFailed = (message) => ({
  type: CREATE_SHORTEN_URL_FAILED,
  payload: message,
});

export const fetchOriginalUrlRequest = (shortenUrl) => ({
  type: FETCH_ORIGINAL_URL_REQUEST,
  payload: shortenUrl,
});

export const fetchOriginalUrlSuccess = (payload) => ({
  type: FETCH_ORIGINAL_URL_SUCCESS,
  payload,
});

export const fetchOriginalUrlFailed = (message) => ({
  type: FETCH_ORIGINAL_URL_FAILED,
  payload: message,
});

export const fetchAllUrlsRequest = () => ({
  type: FETCH_ALL_URLS_REQUEST,
});

export const fetchAllUrlsSuccess = (payload) => ({
  type: FETCH_ALL_URLS_SUCCESS,
  payload,
});

export const fetchAllUrlsFailed = (message) => ({
  type: FETCH_ALL_URLS_FAILED,
  payload: message,
});

export const registerUserRequest = (userInfo) => ({
  type: REGISTER_USER_REQUEST,
  payload: userInfo,
});

export const registerUserSuccess = (payload) => ({
  type: REGISTER_USER_SUCCESS,
  payload,
});

export const registerUserFailed = (message) => ({
  type: REGISTER_USER_FAILED,
  payload: message,
});

export const signInRequest = (userInfo) => ({
  type: SIGN_IN_REQUEST,
  payload: userInfo,
});

export const signInSuccess = (payload) => ({
  type: SIGN_IN_SUCCESS,
  payload,
});

export const signInFailed = (message) => ({
  type: SIGN_IN_FAILED,
  payload: message,
});

export const signOut = () => ({
  type: SIGN_OUT,
})

export const alertSuccess = (payload) => ({
  type: ALERT_SUCCESS,
  payload,
});

export const alertError = (payload) => ({
  type: ALERT_ERROR,
  payload,
});

export const alertClear = () => ({
  type: ALERT_CLEAR,
});
