import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import rootSaga from "./root-saga";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];

export function initializeStore() {
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  sagaMiddleware.run(rootSaga);
  return store;
}
