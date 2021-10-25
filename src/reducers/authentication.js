import { SIGN_IN_SUCCESS, SIGN_IN_REQUEST, SIGN_IN_FAILED, SIGN_OUT } from '../actions';

let token = JSON.parse(localStorage.getItem('token'));

const initialState = {
  loggingIn: false,
  loggedIn: !!token,
  token: token,
  success: false,
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return { loggingIn: true };
    case SIGN_IN_SUCCESS:
      const { token } = action.payload;
      localStorage.setItem('token', JSON.stringify(token));

      return {
        loggedIn: true,
        loggingIn: false,
        success: true,
        token,
      };
    case SIGN_IN_FAILED:
      return { loggingIn: false };
    case SIGN_OUT:
      localStorage.removeItem('token')
      return {
        ...state,
        loggedIn: false,
        token: '',
      }
    default:
      return state;
  }
};

export default authenticationReducer;
