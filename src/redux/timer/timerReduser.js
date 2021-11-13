import { combineReducers } from 'redux';
import { Type } from './timerActions';


const valueReduser = (state = 0, {type, payload}) => {
    switch(type) {
        case Type.INCREMENT: 
            return state + payload;

        case Type.DECREMENT:
            return state - payload;

        default: return state;
    };
};

const stepReduser = (state = 5, {type, payload}) => {
    switch(type) {
        case Type.CHANGE_STEP:
            return payload;
        default:
            return state;
    };
};
export default combineReducers({
    value: valueReduser,
    step: stepReduser,
});

