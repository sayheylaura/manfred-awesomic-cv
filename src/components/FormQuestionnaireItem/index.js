import React, { Component } from "react";
import PropTypes from "prop-types";
//import FormInput from '../FormInput';
import Button from "../Button";
import FormTextarea from "../FormTextarea";

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
    const { ind, item, questionnaire } = this.props;
    const { question, answer } = item;
    return (
      <div className="form__container">
        <p className="form__container-title">{`Question ${ind + 1} of ${questionnaire.length}`}</p>

        {/* <FormInput
          labelContent="Question"
          styles="form__input"
          inputType="text"
          inputName="question"
          inputValue={question}
          example="Ex: What JS frameworks do you use?"
          handleInputChange={this.handleChange}
        /> */}

        {/* <FormInput
          labelContent="Answer"
          styles="form__input"
          inputType="text"
          inputName="answer"
          inputValue={answer}
          example="Ex: React"
          handleInputChange={this.handleChange}
        /> */}

        <FormTextarea
          labelContent="Question"
          textAreaStyles="textarea"
          textAreaLabelStyles="label"
          textName="question"
          textValue={question}
          example="Ex: What JS frameworks do you use?"
          handleTextChange={this.handleChange}
        />

        <FormTextarea
          labelContent="Answer"
          textAreaStyles="textarea"
          textAreaLabelStyles="label"
          textName="answer"
          textValue={answer}
          example="Ex: What JS frameworks do you use?"
          handleTextChange={this.handleChange}
        />

        <div className="remove-btn__container">
          <Button
            buttonType="button"
            styles="remove-btn"
            handleButtonClick={this.handleRemoveBtn}
          >
            Remove
        </Button>
        </div>
      </div>
    );
  }
}

FormQuestionnaireItem.propTypes = {
  ind: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  questionnaire: PropTypes.array.isRequired,
  handleRemoveQuestion: PropTypes.func.isRequired,
  handleQuestionInputChange: PropTypes.func.isRequired
};

export default FormQuestionnaireItem;
