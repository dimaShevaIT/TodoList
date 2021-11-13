import React, { Component } from "react";
import axios from "axios";

const getIdFromProps = props => props.match.params.id;


export default class Article extends Component {
    state={
        icon: '',
    };

    componentDidMount () {
        const id = getIdFromProps(this.props);
        axios.get(`/articles/${getIdFromProps}`).then(response => response.data);
        this.setState( {icon: [id]} )
    }

    render() {
        const { icon } = this.state;
        return (
            <div>
                <h1>Single Article Page</h1>
                {icon}
            </div>
            
        );
    };
};