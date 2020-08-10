import { createStore, applyMiddleware } from "redux";
import reduxLogger from 'redux-logger';
import reduxThunk from "redux-thunk";
import rootReducer from './mainReducer';

const middlewares = [reduxLogger, reduxThunk];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
