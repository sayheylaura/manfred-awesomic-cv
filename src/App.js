import React, { Component } from "react";
import "./App.css";
//import sample from "./services/sample.json";
import sample_2 from "./services/sample_2.json";
import Preview from "./components/Preview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: sample_2
    };
  }

  render() {
    const { sample } = this.state;
    return (
      <div className="App">
        <h1>Manfred Awesomic CV</h1>
        <Preview sample={sample} />
      </div>
    );
  }
}

export default App;
