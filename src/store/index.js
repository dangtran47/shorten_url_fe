import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import rootRedcuer from '../reducers'
import rootEpic from '../epics'

const epicMiddleware = createEpicMiddleware()
export default createStore(rootRedcuer, applyMiddleware(epicMiddleware))
epicMiddleware.run(rootEpic)
