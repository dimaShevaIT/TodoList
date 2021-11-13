import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import timerReduser from "./timer/timerReduser";
import postsReduser from './posts/postsReduser';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import throttle from './middleware/throttle';
import stateValidator from "./middleware/state-validatin";
import analytics from './middleware/analytics';


const rootReducers = combineReducers({
    timer: timerReduser,
    posts: postsReduser,
})

const enhancer = applyMiddleware(ReduxThunk, throttle, analytics, logger, stateValidator);

export const store = createStore(rootReducers, composeWithDevTools(enhancer));

