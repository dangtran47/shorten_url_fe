import { combineEpics } from 'redux-observable'

import url from './url'
import registration from './registration'

export default combineEpics(
  url,
  registration
)
