import { combineEpics } from "redux-observable";

import url from "./url";
import registration from "./registration";
import authentication from "./authentication";

export default combineEpics(url, registration, authentication);
