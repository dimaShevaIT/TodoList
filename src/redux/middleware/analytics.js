const analytics =store => next => action => {
    next(action);

    const sholdSend = action.meta && action.meta.analytics;

    if (sholdSend) {
        console.log(`Sending ${action.type} to analytic server`);
    };
};

export default analytics;