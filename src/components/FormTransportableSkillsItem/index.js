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
    const { value, name } = event.currentTarget;
    const { handleTransportableSkillsInput, ind } = this.props;
    handleTransportableSkillsInput(value, name, ind);
  }



  render() {
    const { transportableSkillDefault } = this.props;
    return (
      <div className="form__container">
        <FormInput
          labelContent="Transportable Skill"
          styles="form__input"
          inputType="text"
          inputName="transportable skills"
          inputValue={transportableSkillDefault}
          example="Professional Goal"
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
  transportableSkillDefault: PropTypes.string.isRequired,
  ind: PropTypes.number.isRequired,
  handleRemoveTransportableSkill: PropTypes.func.isRequired,
  handleTransportableSkillsInput:PropTypes.func.isRequired
}

export default FormTransportableSkillsItem;
