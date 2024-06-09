import { combineReducers, compose, createStore } from 'redux';
import { weddingReducers } from './wedding/wedding.reducers';

const reducers = combineReducers({
  wedding: weddingReducers
});

const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
export const store = createStore(reducers, composeEnhancer);