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
      sample: sample_2,
      miscEdDefault: ""
    };

    this.handlePrintBtn = this.handlePrintBtn.bind(this);
    this.handleJsonText = this.handleJsonText.bind(this);
    this.handleDefaultInputChange = this.handleDefaultInputChange.bind(this);
    this.handleAddMiscItem = this.handleAddMiscItem.bind(this);
    this.handleRemoveMiscItem = this.handleRemoveMiscItem.bind(this);
    this.handleMiscInputChange = this.handleMiscInputChange.bind(this);
  }

  handlePrintBtn() {
    window.print();
  }

  handleJsonText(event) {
    const currentValue = event.currentTarget.value;
    const parsedValue = JSON.parse(currentValue);
    this.setState({ sample: parsedValue });
  }

  handleDefaultInputChange(event) {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value
    });
  }

  handleAddMiscItem() {
    const { miscEdDefault } = this.state;
    const newMiscItem = miscEdDefault;

    this.setState(prevState => {
      const newState = {
        sample: {
          ...prevState.sample,
          miscEducation: prevState.sample.miscEducation.concat(newMiscItem)
        },
        miscEdDefault: ""
      };
      return newState;
    });
  }

  handleRemoveMiscItem(ind) {
    this.setState(prevState => {
      const newState = {
        sample: {
          ...prevState.sample,
          miscEducation: prevState.sample.miscEducation.filter(
            (item, index) => {
              return index !== ind;
            }
          )
        }
      };
      return newState;
    });
  }

  handleMiscInputChange(value, ind) {
    this.setState(prevState => {
      const newState = {
        sample: {
          ...prevState.sample,
          miscEducation: prevState.sample.miscEducation.map((item, index) => {
            if (index === ind) {
              item = value;
            }
            return item;
          })
        }
      };
      return newState;
    });
  }

  render() {
    const { sample, miscEdDefault } = this.state;
    return (
      <div className="App">
        <Header />
        <Main
          sample={sample}
          miscEdDefault={miscEdDefault}
          handlePrintBtn={this.handlePrintBtn}
          handleJsonText={this.handleJsonText}
          handleDefaultInputChange={this.handleDefaultInputChange}
          handleAddMiscItem={this.handleAddMiscItem}
          handleRemoveMiscItem={this.handleRemoveMiscItem}
          handleMiscInputChange={this.handleMiscInputChange}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
