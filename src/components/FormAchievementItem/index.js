import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from "../FormInput";
import Button from "../Button";

class FormAchievementItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      achievements: []
    }
  }

  getNumberOfEducationItems() {
    const { education } = this.props;
    const newAchievements = education.map((item, index) => {
      this.setState(prevState => {
        const newState = {
          achievements: prevState.achievements.concat(item)
        }
        return newState;
      })
    return newAchievements;
    })
}

render() {
  const { item, ind } = this.props;
  this.getNumberOfEducationItems();
  return (
    <div >
      <FormInput
        labelContent="Item"
        styles="form__input"
        inputType="text"
        inputName="achievement"
        inputValue={item}
        example="Best end of degree thesis"
        handleInputChange={this.handleInputChange}
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

FormAchievementItem.propTypes = {
  ind: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired
}

export default FormAchievementItem;
