import React, { Component } from "react";
import "./App.scss";
// import sample from "./services/sample.json";
// import sample_2 from "./services/sample_2.json";
//import sample from "./services/sample_yago.json";
import sample from "./services/example.json";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: sample,
      languageDefault: "",
      proficiencyDefault: "elementary",
      miscEdDefault: "",
      questionDefault: "",
      answerDefault: ""
    };

    this.handlePrintBtn = this.handlePrintBtn.bind(this);
    this.handleJsonText = this.handleJsonText.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleQuestionnaireInput = this.handleQuestionnaireInput.bind(this);
    this.handleDefaultInputChange = this.handleDefaultInputChange.bind(this);
    this.handleAddLanguageItem = this.handleAddLanguageItem.bind(this);
    this.handleRemoveLanguageItem = this.handleRemoveLanguageItem.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
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
    const { question, answer } = this.state;
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

  handleRemoveItem(ind) {
    this.setState(prevState => {
      const newState = {
        sample: {
          ...prevState.sample,
          questionnaire: prevState.sample.questionnaire.filter(
            (item, index) => {
              return index !== ind;
            }
          )
        }
      };
      return newState;
    });
  }

  handleQuestionnaireInput(value, name, ind) {
    this.setState(prevState => {
      const newState = {
        sample: {
          ...prevState.sample,
          questionnaire: prevState.sample.questionnaire.map((item, index) => {
            if (index === ind) {
              item = {
                ...item,
                [name]: value
              };
            }
            return item;
          })
        }
      };
      return newState;
    });
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

  handleAddLanguageItem() {
    const { language, proficiency } = this.state;
    const newLanguageItem = {
      language: language,
      proficiency: proficiency
    };

    this.setState(prevState => {
      const newState = {
        sample: {
          ...prevState.sample,
          languages: prevState.sample.languages.concat(newLanguageItem)
        },
        language: "",
        proficiency: "elementary"
      };
      return newState;
    });
  }

  handleRemoveLanguageItem(ind) {
    this.setState(prevState => {
      const newState = {
        sample: {
          ...prevState.sample,
          languages: prevState.sample.languages.filter((item, index) => {
            return index !== ind;
          })
        }
      };
      return newState;
    });
  }

  handleLanguageChange(value, name, ind) {
    this.setState(prevState => {
      const newState = {
        sample: {
          ...prevState.sample,
          languages: prevState.sample.languages.map((item, index) => {
            if (index === ind) {
              item = {
                ...item,
                [name]: value
              };
            }
            return item;
          })
        }
      };
      return newState;
    });
  }

  render() {
    const {
      sample,
      questionDefault,
      answerDefault,
      languageDefault,
      proficiencyDefault,
      miscEdDefault
    } = this.state;
    return (
      <div className="App">
        <Header />
        <Main
          sample={sample}
          question={questionDefault}
          answer={answerDefault}
          language={languageDefault}
          proficiency={proficiencyDefault}
          miscEdDefault={miscEdDefault}
          handlePrintBtn={this.handlePrintBtn}
          handleJsonText={this.handleJsonText}
          handleAddItem={this.handleAddItem}
          handleQuestionChange={this.handleQuestionChange}
          handleRemoveItem={this.handleRemoveItem}
          handleQuestionnaireInput={this.handleQuestionnaireInput}
          handleDefaultInputChange={this.handleDefaultInputChange}
          handleAddLanguageItem={this.handleAddLanguageItem}
          handleRemoveLanguageItem={this.handleRemoveLanguageItem}
          handleLanguageChange={this.handleLanguageChange}
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
