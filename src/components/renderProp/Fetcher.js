import React, {Component} from 'react';


export default class Fetcher extends Component {
    state = {
        data: {},
        isLoading: false,
        error: null,
    };

    ComponentDidMount() {
        this.setState( {isLoading: true} );

        fetch(url)
         .then(res => res.json())
         .then(data => this.setState({data}))
         .catch(error => this.setState({error}))
         .fanaly(()=> this.setState({ isLoading: false }));
    };

    render() {
        return this.props.children(this.state);
    }
}