import { combineEpics, ofType } from "redux-observable";
import { mergeMap, map, catchError, of, pipe } from "rxjs";
import get from "lodash/get";

import API from "../api";
import {
  REGISTER_USER_REQUEST,
  registerUserFailed,
  registerUserSuccess,
} from "../actions";

const errorHandler = (err) => get(err.xhr.response, "errors.message");

const registrationUserEpic = (action) =>
  action.pipe(
    ofType(REGISTER_USER_REQUEST),
    mergeMap((action) => API.registration.registerUser(action.payload)),
    map(registerUserSuccess),
    catchError(pipe(errorHandler, (message) => of(registerUserFailed(message))))
  );

export default combineEpics(registrationUserEpic);
