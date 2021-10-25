import { combineEpics, ofType } from "redux-observable";
import { mergeMap, catchError, of, asyncScheduler, concat, merge } from "rxjs";
import get from "lodash/get";

import API from "../api";
import {
  SIGN_IN_REQUEST,
  signInFailed,
  signInSuccess,
  alertSuccess,
  alertError,
} from "../actions";

const errorHandler = (err) => ({
  error: get(err.xhr.response, "errors.message"),
});

const signInEpic = (action) =>
  action.pipe(
    ofType(SIGN_IN_REQUEST),
    mergeMap((action) => API.authentication.signIn(action.payload)),
    mergeMap((payload) =>
      concat([signInSuccess(payload), alertSuccess(payload)], asyncScheduler)
    ),
    catchError((err, caught) =>
      merge(
        of(signInFailed(errorHandler(err)), alertError(errorHandler(err))),
        caught
      )
    )
  );

export default combineEpics(signInEpic);
