import React, { Component } from "react";
import "./App.scss";
//import sample from "./services/sample.json";
import sample_2 from "./services/sample_2.json";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: sample_2
    };

    this.handlePrintBtn = this.handlePrintBtn.bind(this);
    this.handleJsonText = this.handleJsonText.bind(this);
  }

  handlePrintBtn() {
    window.print();
  }

  handleJsonText(event) {
    const currentValue = event.currentTarget.value;
    const parsedValue = JSON.parse(currentValue);
    this.setState({ sample: parsedValue });
  }

  render() {
    const { sample } = this.state;
    return (
      <div className="App">
        <Header />
        <Main
          sample={sample}
          handlePrintBtn={this.handlePrintBtn}
          handleJsonText={this.handleJsonText}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
