import { combineEpics, ofType } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators'

import API from '../api'
import {
  CREATE_SHORTEN_URL_REQUEST,
  FETCH_ORIGINAL_URL_REQUEST,
  createShortenUrlSuccess,
  createShortenUrlFailed,
  fetchOriginalUrlSuccess,
  fetchOriginalUrlRequest,
} from '../actions'


const createShortenUrlEpic = action => action.pipe(
  ofType(CREATE_SHORTEN_URL_REQUEST),
  mergeMap(action => API.url.createShortenUrl(action.payload)),
  map(createShortenUrlSuccess),
  catchError(createShortenUrlFailed)
)

const fetchShortenUrlEpic = action => action.pipe(
  ofType(FETCH_ORIGINAL_URL_REQUEST),
  mergeMap(action => API.url.fetchOriginalUrl(action.payload)),
  map(fetchOriginalUrlSuccess),
  catchError(fetchOriginalUrlRequest)
)

export default combineEpics(
  createShortenUrlEpic,
  fetchShortenUrlEpic
)
