import React, {Component, createContext} from 'react';

const ReaderContext = createContext();

export default class Reader extends React.Component {
    state = {
        currentIdx: 0,
        publication: this.props.items[0],
        totalPublications: this.props.items.length,
    };

    handlePrev = () => {
        this.setState(state => ({
            currentIdx: state.currentIdx - 1,
            publication: this.props.items[state.currentIdx - 1],
        }))
    };

    handleNext = () => {
        this.setState(state => ({
            currentIdx: state.currentIdx + 1,
            publication: this.props.items[state.currentIdx + 1],
        }))
    };


    render() {
        return <ReaderContext.Provider value={...this.state, onPrev: this.handlePev, onNext: this.handleNext}>
        <div className="render">{this.props.children}</div>
        </ReaderContext.Provider>
    }
}