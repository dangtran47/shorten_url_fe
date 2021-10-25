import { combineReducers } from "redux";

import alert from "./alert";
import registration from "./registration";
import authentication from "./authentication";
import url from "./url";

export default combineReducers({
  alert,
  registration,
  authentication,
  url,
});
