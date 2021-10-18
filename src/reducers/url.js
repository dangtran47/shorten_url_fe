import { GET_SHORTEN_URL_SUCCESS } from '../actions'

export default (state = {}, action) => {
  console.log(action)
  switch (action.type) {
    case GET_SHORTEN_URL_SUCCESS:
      return action.payload
    default:
      return state
  }
}
