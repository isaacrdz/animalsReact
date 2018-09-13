import React, { Component } from "react";

class Animal extends Component {
  render() {
    const { name } = this.props.animal;
    return <p>{name}</p>;
  }
}
export default Animal;
