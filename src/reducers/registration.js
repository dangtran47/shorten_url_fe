import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_FAILED,
} from "../actions";

const initialState = {
  registering: false,
  success: false,
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return { registering: true };
    case REGISTER_USER_SUCCESS:
      return { registering: false, success: true };
    case REGISTER_USER_FAILED:
      return { registering: false };
    default:
      return state;
  }
};

export default registrationReducer;
