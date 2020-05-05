import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";


import rootReducer from "./root-reducer"

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

// Add middleware to the store, so when actions get fired or dispatched, vi can catch them and display

