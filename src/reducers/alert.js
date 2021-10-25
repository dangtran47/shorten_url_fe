import { ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR } from "../actions";

const alertReducer = (state = {}, action) => {
  switch (action.type) {
    case ALERT_SUCCESS:
      return action.payload;
    case ALERT_ERROR:
      return action.payload;
    case ALERT_CLEAR:
      return {};
    default:
      return state;
  }
};

export default alertReducer;
