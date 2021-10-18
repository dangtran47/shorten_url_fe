import { ofType } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators'

import API from '../api'
import { GET_SHORTEN_URL, getShortenUrlFailed, getShortenUrlSuccess } from '../actions'

export default action => action.pipe(
  ofType(GET_SHORTEN_URL),
  mergeMap(action => API.url.getShortenUrl(action.payload)),
  map(getShortenUrlSuccess),
  catchError(getShortenUrlFailed)
)


