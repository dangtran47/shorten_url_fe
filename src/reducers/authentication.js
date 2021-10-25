import { SIGN_IN_SUCCESS, SIGN_IN_REQUEST, SIGN_IN_FAILED } from "../actions";

let token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  loggingIn: false,
  loggedIn: false,
  token: token,
  success: false,
};

const authenticationReducer = (state = initialState, action) => {
  console.log("SIGN IN REDUCER");
  console.log(action);

  switch (action.type) {
    case SIGN_IN_REQUEST:
      return { loggingIn: true };
    case SIGN_IN_SUCCESS:
      const { token } = action.payload;
      localStorage.setItem("token", JSON.stringify(token));

      return {
        loggedIn: true,
        loggingIn: false,
        success: true,
        token,
      };
    case SIGN_IN_FAILED:
      return { loggingIn: false };
    default:
      return state;
  }
};

export default authenticationReducer;