import React, { Component } from "react";
import Animals from "./components/Animals";
import "./App.css";

class App extends Component {
  state = {
    animals: [
      {
        name: "Tiger"
      },
      {
        name: "Whale"
      },
      {
        name: "Perro"
      }
    ]
  };
  render() {
    const { animals } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 mb-3 mt-3">
            <h1 className="text-center">Animales</h1>
            <Animals animals={animals} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
