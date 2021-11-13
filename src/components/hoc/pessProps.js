import React, {Component} from 'react';

const pessProps = props => BaseComponent => {
    return class PessProps extends Component {
        render() {
            return <BaseComponent {...props}{...this.props} />
        };
    };
};

export default pessProps;

