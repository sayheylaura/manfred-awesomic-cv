import React, { Component } from "react";
import "./App.scss";
//import sample from "./services/sample.json";
import sample_2 from "./services/sample_2.json";
import Preview from "./components/Preview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: sample_2
    };

    this.handlePrintButton = this.handlePrintButton.bind(this);
  }

  handlePrintButton() {
    window.print();
  }

  render() {
    const { sample } = this.state;
    return (
      <div className="App">
        <h1>Manfred Awesomic CV</h1>
        <Preview sample={sample} handlePrintButton={this.handlePrintButton} />
      </div>
    );
  }
}

export default App;
