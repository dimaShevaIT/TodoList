import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';



export default class CoffeApp extends Component {
    static defaultProps = {
        step: 1,
    }

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      };

    handleChange = e => {
        this.setState(state => ({...this.state, [e.target.name] : e.target.value =  Number(e.target.value) + Number(this.props.step)}));
    };
    
    

    countTotalFeedback = () => {
        const values = Object.values(this.state);
        const sum = values.reduce((a, b) => a + b, 0);
        return sum;
    };

    countPositiveFeedbackPercentage = () => {
        const sum = this.countTotalFeedback();
        if (sum > 0) {
        const result = this.state.good * 100 / sum;
        return (`${result} %`);
        }
    }

    render() {
        const { good, neutral, bad} = this.state;
        const options = Object.keys(this.state);
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={options} onLeaveFeedback={this.handleChange} />
                </Section>
                
                <Section title="Statistic">
                    { this.countTotalFeedback() > 0 && <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
                    } 
                </Section>
                
                
                
            </div>
        );
    };
};