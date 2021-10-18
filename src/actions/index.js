export const GET_SHORTEN_URL = 'GET_SHORTEN_URL'
export const GET_SHORTEN_URL_SUCCESS = 'GET_SHORTEN_URL_SUCCESS'
export const GET_SHORTEN_URL_FAILED = 'GET_SHORTEN_URL_FAILED'

export const getShortenUrl = (urlInfo) => ({
  type: GET_SHORTEN_URL,
  payload: urlInfo,
})

export const getShortenUrlSuccess = payload =>
  ({ type: GET_SHORTEN_URL_SUCCESS, payload })

export const getShortenUrlFailed = message => ({
  type: GET_SHORTEN_URL_FAILED, payload: message
})


