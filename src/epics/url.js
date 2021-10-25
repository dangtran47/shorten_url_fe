import { combineEpics, ofType } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import get from 'lodash/get';

import API from '../api';
import {
  CREATE_SHORTEN_URL_REQUEST,
  FETCH_ORIGINAL_URL_REQUEST,
  FETCH_ALL_URLS_REQUEST,
  createShortenUrlSuccess,
  createShortenUrlFailed,
  fetchOriginalUrlSuccess,
  fetchOriginalUrlFailed,
  fetchAllUrlsSuccess,
  fetchAllUrlsFailed,
  alertError,
} from '../actions';
import { merge, of } from 'rxjs';

const errorHandler = (err) => ({
  error: get(err.xhr.response, 'errors.message'),
});

const createShortenUrlEpic = (action) =>
  action.pipe(
    ofType(CREATE_SHORTEN_URL_REQUEST),
    mergeMap((action) => API.url.createShortenUrl(action.payload)),
    map(createShortenUrlSuccess),
    catchError((err, caught) =>
      merge(
        of(
          createShortenUrlFailed(errorHandler(err)),
          alertError(errorHandler(err))
        ),
        caught
      )
    )
  );

const fetchShortenUrlEpic = (action) =>
  action.pipe(
    ofType(FETCH_ORIGINAL_URL_REQUEST),
    mergeMap((action) => API.url.fetchOriginalUrl(action.payload)),
    map(fetchOriginalUrlSuccess),
    catchError((err, caught) =>
      merge(
        of(
          fetchOriginalUrlFailed(errorHandler(err)),
          alertError(errorHandler(err))
        ),
        caught
      )
    )
  );

const fetchAllUrlsEpic = (action) =>
  action.pipe(
    ofType(FETCH_ALL_URLS_REQUEST),
    mergeMap((action) => API.url.fetchAllUrls()),
    map(fetchAllUrlsSuccess),
    catchError((err, caught) =>
      merge(
        of(
          fetchAllUrlsFailed(errorHandler(err)),
          alertError(errorHandler(err))
        ),
        caught
      )
    )
  );

export default combineEpics(
  createShortenUrlEpic,
  fetchShortenUrlEpic,
  fetchAllUrlsEpic
);
