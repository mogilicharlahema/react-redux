import { applyMiddleware, legacy_createStore } from "redux"

import { rootReducer } from "./combineReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import logger from "redux-logger"
import { thunk } from "redux-thunk"



export const reduxStore=legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk )))