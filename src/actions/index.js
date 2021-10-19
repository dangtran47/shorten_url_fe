export const CREATE_SHORTEN_URL_REQUEST = 'CREATE_SHORTEN_URL_REQUEST'
export const CREATE_SHORTEN_URL_SUCCESS = 'CREATE_SHORTEN_URL_SUCCESS'
export const CREATE_SHORTEN_URL_FAILED = 'CREATE_SHORTEN_URL_FAILED'

export const FETCH_ORIGINAL_URL_REQUEST = 'FETCH_ORIGINAL_URL_REQUEST'
export const FETCH_ORIGINAL_URL_SUCCESS = 'FETCH_ORIGINAL_URL_SUCCESS'
export const FETCH_ORIGINAL_URL_FAILED = 'FETCH_ORIGINAL_URL_FAILED'

export const createShortenUrlRequest = (urlInfo) => ({
  type: CREATE_SHORTEN_URL_REQUEST,
  payload: urlInfo,
})

export const createShortenUrlSuccess = payload =>
  ({ type: CREATE_SHORTEN_URL_SUCCESS, payload })

export const createShortenUrlFailed = message => ({
  type: CREATE_SHORTEN_URL_FAILED, payload: message
})

export const fetchOriginalUrlRequest = (shortenUrl) => ({
  type: FETCH_ORIGINAL_URL_REQUEST,
  payload: shortenUrl
})

export const fetchOriginalUrlSuccess = payload => ({
  type: FETCH_ORIGINAL_URL_SUCCESS,
  payload
})

export const fetchOriginalUrlFailed = message => ({
  type: FETCH_ORIGINAL_URL_FAILED,
  payload: message
})

