import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../FormInput';
import Button from '../Button';

class FormQuestionnaireItem extends Component {
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  removeItem() {
    const { handleRemoveItem, ind } = this.props;
    handleRemoveItem(ind);
  }

  handleInputChange(event) {
    const { value, name } = event.currentTarget;
    const { handleDefaultInputChange, ind } = this.props;
    handleDefaultInputChange(value, name, ind);
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
                example="What JS frameworks do you use?"
                handleInputChange={this.handleInputChange}
              />

              <FormInput
                labelContent="Answer"
                styles="form__input"
                inputType="text"
                inputName="answer"
                inputValue={answer}
                example="React"
                handleInputChange={this.handleInputChange}
              />

              <Button
                buttonType="button"
                styles="remove-btn"
                handleButtonClick={this.removeItem}
              >
                Remove
              </Button>
            </div>
    );
  }
}

FormQuestionnaireItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  handleRemoveItem: PropTypes.func.isRequired
}

export default FormQuestionnaireItem;
