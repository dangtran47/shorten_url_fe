import { combineEpics, ofType } from "redux-observable";
import {
  mergeMap,
  catchError,
  of,
  asyncScheduler,
  concat,
  merge,
} from "rxjs";
import get from "lodash/get";

import API from "../api";
import {
  REGISTER_USER_REQUEST,
  registerUserFailed,
  registerUserSuccess,
  alertSuccess,
  alertError,
} from "../actions";

const errorHandler = (err) => ({
  error: get(err.xhr.response, "errors.message"),
});

const registrationUserEpic = (action) =>
  action.pipe(
    ofType(REGISTER_USER_REQUEST),
    mergeMap((action) => API.registration.registerUser(action.payload)),
    mergeMap((payload) =>
      concat(
        [registerUserSuccess(payload), alertSuccess(payload)],
        asyncScheduler
      )
    ),
    catchError((err, caught) =>
      merge(
        of(
          registerUserFailed(errorHandler(err)),
          alertError(errorHandler(err))
        ),
        caught
      )
    )
  );

export default combineEpics(registrationUserEpic);
