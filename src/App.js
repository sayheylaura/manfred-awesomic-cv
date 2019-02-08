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
      question: "",
      answer: ""
    };

    this.handlePrintBtn = this.handlePrintBtn.bind(this);
    this.handleJsonText = this.handleJsonText.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
  }

  handlePrintBtn() {
    window.print();
  }

  handleJsonText(event) {
    const currentValue = event.currentTarget.value;
    const parsedValue = JSON.parse(currentValue);
    this.setState({ sample: parsedValue });
  }

  handleProfileInputs(event) {
    const { value, name } = event.currentTarget;
    this.setState(prevState => {
      const newProfile = {
        ...prevState.sample.author.profile[0],
        [name]: value
      };
      const newState = {
        sample: {
          ...prevState.sample,
          author: {
            ...prevState.sample.author,
            profile: [newProfile]
          }
        }
      };
      return newState;
    });
  }

  handleAddItem() {
    const {question, answer} = this.state;
    const newQuestItem = {
      question: question,
      answer: answer
    };

    this.setState(prevState => {
      const newState = {
        sample: {
          ...prevState.sample,
          questionnaire: prevState.sample.questionnaire.concat(newQuestItem)
        },
        question: "",
        answer: ""
      };
      return newState;
    });
  }

  handleQuestionChange(event) {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { sample, question, answer } = this.state;
    return (
      <div className="App">
        <Header />
        <Main
          sample={sample}
          question={question}
          answer={answer}
          handlePrintBtn={this.handlePrintBtn}
          handleJsonText={this.handleJsonText}
          handleAddItem={this.handleAddItem}
          handleQuestionChange={this.handleQuestionChange}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
