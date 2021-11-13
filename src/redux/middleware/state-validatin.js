import tv4 from 'tv4';
import stateShema from '../../shemas/state-validation.json';

const stateValidator = store => next => action => {
    next(action);

    const isValid = tv4.validate(store.getState(), stateShema);
    if (!isValid) {
        console.warn('Invalid State shema detected');
        console.log(tv4.error);
    };
};

export default stateValidator;