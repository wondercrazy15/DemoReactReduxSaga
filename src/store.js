import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers";
// import mySaga from "./Sagas";

import rootSaga from './Sagas/Index'
// create the saga middleware
console.log('Call Saga MM');
const sagaMiddleware = createSagaMiddleware();


// mount it on the Store
export default createStore(reducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(rootSaga);