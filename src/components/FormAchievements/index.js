import React, { Component } from "react";
import PropTypes from "prop-types";
import FormInput from "../FormInput";
import Button from "../Button";

class FormAchievements extends Component {
  render() {
    const {
      achievements,
      achievementDefault,
      handleDefaultInputChange,
      handleAddAchievementItem
    } = this.props;
    return (
      <div>
        <p>Achievements</p>
        <p>List of awards or achievements during your studies</p>

        {achievements.map((item, index) => {
          return (
            <div key={index}>
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
        })}

        <div>
          <FormInput
            labelContent="Item"
            styles="form__input"
            inputType="text"
            inputName="achievement"
            inputValue={achievementDefault}
            example="Best end of degree thesis"
            handleInputChange={handleDefaultInputChange}
          />

          <Button
            buttonType="button"
            styles="add-btn"
            handleButtonClick={handleAddAchievementItem}
          >
            Add item
          </Button>
        </div>
      </div>
    );
  }
}

FormAchievements.propTypes = {
  achievements: PropTypes.array.isRequired
};

export default FormAchievements;
