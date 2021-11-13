import React from 'react';
import withReaderContex from './withReaderContex';

const Controls = ({onPrev, onNext})=> (
    <section className="controls">
        <button className="button" onClick={onPrev}>
        Назад
        </button>
        <button className="button" onClick={onNext}>
        Вперед
        </button>
    </section>
);

export default withReaderContex(Controls);