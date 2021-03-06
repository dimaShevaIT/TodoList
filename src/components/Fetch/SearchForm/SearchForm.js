import React, {Component} from 'react';


export default class SearchForm extends Component {
    state = { query: ''};

    handleChange = e => {
        this.setState({
            query: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.query);

        this.setState({query: ''});
    };

    render() {
        const { query } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={query} onChange={this.handleChange}/>
            </form>
        );
    }
}

