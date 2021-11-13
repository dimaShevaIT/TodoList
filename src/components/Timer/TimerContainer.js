import { connect } from "react-redux";
import { increment, decrement } from '../../redux/timer/timerActions';
import * as timerSelector from '../../redux/timer/timerSelector';
import Timer from './Timer';

const mapStateToProps = state => ({
    value: timerSelector.getValue(state),
    step: timerSelector.getStep(state),
});

const mapDispatchToProps = dispatch => ({
    onIncrement: step => dispatch(increment(step)),
    onDecrement: step => dispatch(decrement(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);