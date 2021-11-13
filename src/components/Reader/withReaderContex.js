import React from'react';
import Reader from './Reader';

const withReaderContex = BaseComponent => props => {
    return (
        <Reader.Consumer>
            {(context) => <BaseComponent {...props} {...context}/>}
        </Reader.Consumer>
    )
};

export default withReaderContex;