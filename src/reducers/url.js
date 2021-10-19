import { CREATE_SHORTEN_URL_SUCCESS, FETCH_ORIGINAL_URL_SUCCESS } from '../actions'

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_SHORTEN_URL_SUCCESS:
      return action.payload
    case FETCH_ORIGINAL_URL_SUCCESS:
      return action.payload
    default:
      return state
  }
}
