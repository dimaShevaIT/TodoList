import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import Reader from './Reader';
import Publication from './Publication';
import Controls from './Controls';
import Counter from './Counter';









ReactDOM.render(
    <Reader items={publication}>
    <Publication />
    <Controls />
    <Counter />
    </Reader>,
    document.getElementById('root'),
);