import React, { Component } from "react";
import "./App.scss";
//import sample from "./services/sample.json";
//import example from "./services/example.json";
import sample_2 from "./services/sample_2.json";
import Preview from "./components/Preview";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: sample_2
    };

    this.handlePrintBtn = this.handlePrintBtn.bind(this);
  }

  handlePrintBtn() {
    window.print();
  }

  render() {
    const { sample } = this.state;
    return (
      <div className="App">
        <Header />
        <main className="main">
          <Preview sample={sample} handlePrintBtn={this.handlePrintBtn} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
