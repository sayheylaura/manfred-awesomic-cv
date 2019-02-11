import React, { Component } from "react";
import PropTypes from "prop-types";
import FormInput from "../FormInput";
import Button from "../Button";

class FormQuestionnaireItem extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveBtn = this.handleRemoveBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleRemoveBtn() {
    const { handleRemoveQuestion, ind } = this.props;
    handleRemoveQuestion(ind);
  }

  handleChange(event) {
    const { value, name } = event.currentTarget;
    const { handleQuestionInputChange, ind } = this.props;
    handleQuestionInputChange(value, name, ind);
  }

  render() {
    const { question, answer } = this.props;
    return (
      <div className="form__container">
        <FormInput
          labelContent="Question"
          styles="form__input"
          inputType="text"
          inputName="question"
          inputValue={question}
          example="Ex: What JS frameworks do you use?"
          handleInputChange={this.handleChange}
        />

        <FormInput
          labelContent="Answer"
          styles="form__input"
          inputType="text"
          inputName="answer"
          inputValue={answer}
          example="Ex: React"
          handleInputChange={this.handleChange}
        />

        <Button
          buttonType="button"
          styles="remove-btn"
          handleButtonClick={this.handleRemoveBtn}
        >
          Remove
        </Button>
      </div>
    );
  }
}

FormQuestionnaireItem.propTypes = {
  ind: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  handleRemoveQuestion: PropTypes.func.isRequired,
  handleQuestionInputChange: PropTypes.func.isRequired
};

export default FormQuestionnaireItem;
