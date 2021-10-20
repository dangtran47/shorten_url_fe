import { combineReducers } from "redux";

import alert from "./alert";
import registration from "./registration";
import url from "./url";

export default combineReducers({
  alert,
  registration,
  url,
});
