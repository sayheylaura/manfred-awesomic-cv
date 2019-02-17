import React, { Component } from "react";
import PropTypes from "prop-types";
import FormInput from "../FormInput";
import Button from "../Button";
import FormTransportableSkillsItem from "../FormTransportableSkillsItem";

class FormTransportableSkills extends Component {
  render() {
    const {
      transportableSkillDefault,
      transportableSkills,
      handleAddTransportableSkill,
      handleTransportableSkillChange,
      handleRemoveTransportableSkill,
      handleTransportableSkillsInput
    } = this.props;
    return (
      <fieldset className="form__fieldset">
        <legend className="form__section-title">Transportable Skills<span className="required_field">*</span></legend>
        <p className="form__section-description">
          List the skills not specifically related to your particular job or
          area of knowledge, but still can be used at work (for example, when
          you were manager in that Burger King and had to organize a team of
          employees)
        </p>
        {transportableSkills && !!transportableSkills.length && transportableSkills.map((item, index) => {
          return (
            <FormTransportableSkillsItem
              key={index}
              transportableSkillDefault={item}
              ind={index}
              handleRemoveTransportableSkill={handleRemoveTransportableSkill}
              handleTransportableSkillsInput={handleTransportableSkillsInput}
            />
          );
        })}
        <div className="form__container">
          <FormInput
            labelContent="More skills"
            styles="form__input"
            inputType="text"
            inputName="transportable skills"
            inputValue={transportableSkillDefault}
            example="Brand Manager"
            handleInputChange={handleTransportableSkillChange}
          />
          <Button
            buttonType="button"
            styles="add-btn"
            handleButtonClick={handleAddTransportableSkill}
          >
            Add
          </Button>
        </div>
      </fieldset>
    );
  }
}

FormTransportableSkills.propTypes = {
  transportableSkillDefault: PropTypes.string.isRequired,
  handleRemoveTransportableSkill: PropTypes.func.isRequired,
  handleTransportableSkillsInput: PropTypes.func.isRequired
};

export default FormTransportableSkills;
