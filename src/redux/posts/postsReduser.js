import { combineReducers } from "redux";
import { ActionType } from './postsActions';
const itemRedusers = (state = [], {type, payload}) => {
    switch(type) {
        case(ActionType.FETCH_POSTS_SUCCESS):
            return payload;
        case(ActionType.DELETE_POSTS):
            return state.filter(item => item.id !== payload);
        default: 
            return state;
    };
};


const tagReduser = (state = null, {type, payload}) => {
    switch(type) {
        case(ActionType.CHANGE_TAG):
            return payload;
        default:
            return state;
    };
};

const loadingReduser = (state = false, {type, payload}) => {
    switch(type) {
        case(ActionType.FETCH_POSTS_START):
            return true;
        case(ActionType.FETCH_POSTS_SUCCESS):
        case(ActionType.FETCH_POSTS_ERROR):
            return false;
        default: 
            return state;
    }
};

const errorReduser = (state = null, {type, payload}) => {
    switch(type) {
        case(ActionType.FETCH_POSTS_START):
            return null;
        
        case(ActionType.FETCH_POSTS_ERROR):
            return payload.error;
        default: 
            return state;
    }
};


export default combineReducers({
    items: itemRedusers,
    loading: loadingReduser,
    error: errorReduser,
    selectedTag: tagReduser,
})
