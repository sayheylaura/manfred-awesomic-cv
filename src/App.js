import React, { Component } from "react";
import "./App.scss";
// import sample from "./services/sample.json";
//import sample_2 from "./services/sample_2.json";
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
      goalDefault: "",
      transportableSkillDefault: "",
      significantRelationshipsDefault:"",
      institutionDefault: "",
      studyDefault: "",
      fromEdDefault: "",
      untilEdDefault: "",
      languageDefault: "",
      proficiencyDefault: "elementary",
      miscEdDefault: "",
      questionDefault: "",
      answerDefault: ""
    };

    this.handlePrintBtn = this.handlePrintBtn.bind(this);
    this.handleJsonText = this.handleJsonText.bind(this);
    this.handleDefaultInputChange = this.handleDefaultInputChange.bind(this);
    this.handleIntroChange = this.handleIntroChange.bind(this);
    this.handleAddGoal = this.handleAddGoal.bind(this);
    this.handleRemoveGoal = this.handleRemoveGoal.bind(this);
    this.handleGoalsInput = this.handleGoalsInput.bind(this);
    this.handleGoalChange = this.handleGoalChange.bind(this);
    this.handleAddEducationItem = this.handleAddEducationItem.bind(this);
    this.handleRemoveEducationItem = this.handleRemoveEducationItem.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleAddLanguageItem = this.handleAddLanguageItem.bind(this);
    this.handleRemoveLanguageItem = this.handleRemoveLanguageItem.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.handleAddMiscItem = this.handleAddMiscItem.bind(this);
    this.handleRemoveMiscItem = this.handleRemoveMiscItem.bind(this);
    this.handleMiscInputChange = this.handleMiscInputChange.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.handleRemoveQuestion = this.handleRemoveQuestion.bind(this);
    this.handleQuestionInputChange = this.handleQuestionInputChange.bind(this);
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

  handleDefaultInputChange(event) {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value
    });
  }


  handleIntroChange(event) {
    const { value } = event.currentTarget;
    this.setState(prevState =>{
      const newState = {
        sample: {
          ...prevState.sample,
          author: {
            ...prevState.sample.author,
            intro: value
          }
        }
      };
      return newState;
    });
  }

  handleAddGoal() {
    const { goalDefault } = this.state;
    const newGoalItem = goalDefault;

    this.setState(prevState => {
      const newState={
        sample: {
          ...prevState.sample,
          author:{
            ...prevState.sample.author,
            professionalGoals: prevState.sample.author.professionalGoals.concat(newGoalItem)
          },
          goalDefault: ""
          }
        };
        return newState;
    });
  }

  handleGoalChange(event) {
    const { value } = event.currentTarget;
    this.setState({
      goalDefault: value
    });
  }

  handleRemoveGoal(ind) {
    this.setState(prevState => {
      const newState = {
        sample: {
          ...prevState.sample,
          author:{
            ...prevState.sample.author,
            professionalGoals: prevState.sample.author.professionalGoals.filter(
              (item, index) => {
                return index !== ind;
              }
            )
          }
        }
      };
      return newState;
    });
  }

  handleGoalsInput(value, name, ind) {
    this.setState(prevState => {
      const newState = {
        sample: {
          ...prevState.sample,
          author:{
            ...prevState.sample.author,
            professionalGoals: prevState.sample.author.professionalGoals.map((item, index) => {
              if (index === ind) {
                item =[
                  value
                ]
              }
              return item;
            })
          }
        }
      };
      return newState;
    });
  }

  handleAddTransSkill(){

  }

  handleAddEducationItem() {
    const {
      institutionDefault,
      studyDefault,
      fromEdDefault,
      untilEdDefault
    } = this.state;

    const newEducationItem = {
      institution: institutionDefault,
      study: studyDefault,
      from: fromEdDefault,
      until: untilEdDefault
    };

    this.setState(prevState => {
      const newState = {
        sample: {
          ...prevState.sample,
          education: prevState.sample.education.concat(newEducationItem)
        },
        institutionDefault: "",
        studyDefault: "",
        fromEdDefault: "",
        untilEdDefault: ""
      };
      return newState;
    });
  }

  handleRemoveEducationItem(ind) {
    this.setState(prevState => {
      const newState = {
        sample: {
          ...prevState.sample,
          education: prevState.sample.education.filter((item, index) => {
            return index !== ind;
          })
        }
      };
      return newState;
    });
  }

  handleEducationChange(value, name, ind) {
    this.setState(prevState => {
      const newState = {
        sample: {
          ...prevState.sample,
          education: prevState.sample.education.map((item, index) => {
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

  handleAddLanguageItem() {
    const { languageDefault, proficiencyDefault } = this.state;

    const newLanguageItem = {
      language: languageDefault,
      proficiency: proficiencyDefault
    };

    this.setState(prevState => {
      const newState = {
        sample: {
          ...prevState.sample,
          languages: prevState.sample.languages.concat(newLanguageItem)
        },
        languageDefault: "",
        proficiencyDefault: "elementary"
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

  handleAddQuestion() {
    const { questionDefault, answerDefault } = this.state;
    const newQuestItem = {
      question: questionDefault,
      answer: answerDefault
    };

    this.setState(prevState => {
      const newState = {
        sample: {
          ...prevState.sample,
          questionnaire: prevState.sample.questionnaire.concat(newQuestItem)
        },
        questionDefault: "",
        answerDefault: ""
      };
      return newState;
    });
  }

  handleRemoveQuestion(ind) {
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

  handleQuestionInputChange(value, name, ind) {
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

  render() {
    const {
      sample,
      goalDefault,
      significantRelationshipsDefault,
      institutionDefault,
      studyDefault,
      fromEdDefault,
      untilEdDefault,
      languageDefault,
      proficiencyDefault,
      miscEdDefault,
      questionDefault,
      answerDefault
    } = this.state;
    return (
      <div className="App">
        <Header />
        <Main
          sample={sample}
          goalDefault={goalDefault}
          significantRelationshipsDefault={significantRelationshipsDefault}
          institutionDefault={institutionDefault}
          studyDefault={studyDefault}
          fromEdDefault={fromEdDefault}
          untilEdDefault={untilEdDefault}
          languageDefault={languageDefault}
          proficiencyDefault={proficiencyDefault}
          miscEdDefault={miscEdDefault}
          questionDefault={questionDefault}
          answerDefault={answerDefault}
          handlePrintBtn={this.handlePrintBtn}
          handleJsonText={this.handleJsonText}
          handleDefaultInputChange={this.handleDefaultInputChange}
          handleIntroChange={this.handleIntroChange}
          handleRemoveGoal = {this.handleRemoveGoal}
          handleAddGoal={this.handleAddGoal}
          handleGoalsInput ={ this.handleGoalsInput}
          handleGoalChange={this.handleGoalChange}
          handleAddEducationItem={this.handleAddEducationItem}
          handleRemoveEducationItem={this.handleRemoveEducationItem}
          handleEducationChange={this.handleEducationChange}
          handleAddLanguageItem={this.handleAddLanguageItem}
          handleRemoveLanguageItem={this.handleRemoveLanguageItem}
          handleLanguageChange={this.handleLanguageChange}
          handleAddMiscItem={this.handleAddMiscItem}
          handleRemoveMiscItem={this.handleRemoveMiscItem}
          handleMiscInputChange={this.handleMiscInputChange}
          handleAddQuestion={this.handleAddQuestion}
          handleRemoveQuestion={this.handleRemoveQuestion}
          handleQuestionInputChange={this.handleQuestionInputChange}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
