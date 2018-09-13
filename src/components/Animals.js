import React, { Component } from "react";
import Animal from "./Animal";

class Animals extends Component {
  render() {
    const { animals } = this.props;

    return (
      <div>
        {animals.map(animal => (
          <Animal animal={animal} />
        ))}
      </div>
    );
  }
}

export default Animals;
