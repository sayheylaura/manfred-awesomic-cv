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
      goal: "",
      miscEdDefault: ""
    };

    this.handlePrintBtn = this.handlePrintBtn.bind(this);
    this.handleJsonText = this.handleJsonText.bind(this);
    this.handleIntroChange = this.handleIntroChange.bind(this);
    this.handleProfessionalGoals = this.handleProfessionalGoals.bind(this);
    this.handleAddGoal = this.handleAddGoal.bind(this);
    this.handleRemoveGoal = this.handleRemoveGoal.bind(this);
    this.handleGoalsInput = this.handleGoalsInput.bind(this);
    this.handleGoalChange = this.handleGoalChange.bind(this);
    this.handleDefaultInputChange = this.handleDefaultInputChange.bind(this);
    this.handleAddMiscItem = this.handleAddMiscItem.bind(this);
    this.handleRemoveMiscItem = this.handleRemoveMiscItem.bind(this);
    this.handleMiscInputChange = this.handleMiscInputChange.bind(this);
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


  handleProfessionalGoals(event){
    const { name, value } = event.currentTarget;
    this.setState(prevState=>{
      const newState = {
        sample: {
          ...prevState.sample,
          author: {
            ...prevState.sample.author,
            [name]: value
          }
        }
      };
      return newState;
    });
  }

  handleAddGoal() {
    const { goal } = this.state;
    const newGoalItem = goal;

    this.setState(prevState => {
      const newState={
        sample: {
          ...prevState.sample,
          professionalGoals: prevState.sample.author.professionalGoals.concat(newGoalItem)
        },
        goal: ""
        };
        return newState;
    });
  }

  handleGoalChange(event) {
    const { value } = event.currentTarget;
    this.setState({
      goal: value
    });
  }

  handleRemoveGoal(ind) {
    this.setState(prevState => {
      const newState = {
        sample: {
          ...prevState.sample,
          professionalGoals: prevState.sample.author.professionalGoals.filter(
            (item, index) => {
              return index !== ind;
            }
          )
        }
      };
      return newState;
    });
  }

  handleGoalsInput(value, ind) {
    this.setState(prevState => {
      const newState = {
        sample: {
          ...prevState.sample,
          professionalGoals: prevState.sample.author.professionalGoals.map((item, index) => {
            console.log(item, index);
            if (index === ind) {
              item = value;
            }
            console.log(item);
            return item;
          })
        }
      };
      console.log(newState);
      return newState;
    });
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

  // TODO: check if goal has to be passed

  render() {
    const { sample, goal, miscEdDefault } = this.state;
    return (
      <div className="App">
        <Header />
        <Main
          sample={sample} handleIntroChange={this.handleIntroChange}
          handleProfessionalGoals={this.handleProfessionalGoals}
          handleRemoveGoal = {this.handleRemoveGoal}
          handleAddGoal={this.handleAddGoal}
          handleGoalsInput ={ this.handleGoalsInput}
          handleGoalChange={this.handleGoalChange}
          goal={goal}
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
