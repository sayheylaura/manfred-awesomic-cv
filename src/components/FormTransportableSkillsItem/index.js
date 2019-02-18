import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../FormInput';
import Button from '../Button';

class FormTransportableSkillsItem extends Component {
  constructor(props) {
    super(props);

    this.removeItem = this.removeItem.bind(this);
    this.handleTransSkillInputChange = this.handleTransSkillInputChange.bind(this);
  }

  removeItem() {
    const { handleRemoveTransportableSkill, ind } = this.props;
    handleRemoveTransportableSkill(ind);
  }

  handleTransSkillInputChange(event) {
    const { value } = event.currentTarget;
    const { handleTransportableSkillsInput, ind } = this.props;
    handleTransportableSkillsInput(value, ind);
  }

  render() {
    const { ind, item, transportableSkills } = this.props;
    return (
      <div className="form__container">
        <FormInput
          labelContent={`Skill ${ind + 1} of ${transportableSkills.length}`}
          styles="form__input"
          inputType="text"
          inputName="transportableSkills"
          inputValue={item}
          example="Ex: Team management"
          handleInputChange={this.handleTransSkillInputChange}
        />

        <div className="remove-btn__container">
          <Button
            buttonType="button"
            styles="remove-btn"
            handleButtonClick={this.removeItem}
          >
            Remove
        </Button>
        </div>
      </div>
    );
  }
}

FormTransportableSkillsItem.propTypes = {
  ind: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
  transportableSkills: PropTypes.array.isRequired,
  handleRemoveTransportableSkill: PropTypes.func.isRequired,
  handleTransportableSkillsInput: PropTypes.func.isRequired
}

export default FormTransportableSkillsItem;
