import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const mainReducer = combineReducers({

});

export const store = createStore(mainReducer, applyMiddleware(thunk));