import React, { Component } from 'react';
import Loader1 from "react-loader-spinner";
export default class Loader extends Component {
  //other logic
  render() {
    return (
      <Loader1
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
}