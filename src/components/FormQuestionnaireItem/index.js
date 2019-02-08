import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../FormInput';
import Button from '../Button';

class FormQuestionnaireItem extends Component {
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem() {
    const { handleRemoveItem, ind } = this.props;
    handleRemoveItem(ind);
  }

  render() {
    const { question, answer, ind } = this.props;
    return (
      <div >
              <FormInput
                labelContent="Question"
                styles="form__input"
                inputType="text"
                inputName={`question${ind}`}
                inputValue={question}
                example="What JS frameworks do you use?"
              /* handleInputChange={handleProfileInputs} */
              />

              <FormInput
                labelContent="Answer"
                styles="form__input"
                inputType="text"
                inputName={`answer${ind}`}
                inputValue={answer}
                example="React"
              /* handleInputChange={handleProfileInputs} */
              />

              <Button
                type="button"
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
