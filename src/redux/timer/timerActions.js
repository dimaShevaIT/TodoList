export const Type = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    CHANGE_STEP: 'CANGE_STEP',
};

export const increment = value => ({
    type: Type.INCREMENT,
    payload: value,
    meta: {
        throttle: 2000,
        analytics: true,
    }
});

export const decrement = value => ({
    type: Type.DECREMENT,
    payload: value,
    meta: {
        throttle: 1000,
    }
});

export const changeStep = step => ({
    type: Type.CHANGE_STEP,
    payload: step,
});
