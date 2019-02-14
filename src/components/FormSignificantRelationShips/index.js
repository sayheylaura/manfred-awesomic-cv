import React, { Component } from 'react';
import FormInput from '../FormInput';
import Button from '../Button';
import PropTypes from 'prop-types';
import FormSignificantRelationShipsItem from '../FormSignificantRelationShipsItem';


class FormSignificantRelationShips extends Component {

  render() {
    const {
      significantRelationships,
      significantRelationshipsDefault,
      handleDefaultInputChangeSignificantRelationships,
      handleAddSignificantRelationships,
      handleRemoveSignificantRelationships,
      handleSignificantRelationshipsInput } = this.props;

    const {
      name,
      comment,
      role,
      contact,
      company
    } = significantRelationshipsDefault;

    console.log("significantRelationshipsDefault", significantRelationshipsDefault);
    console.log("significantRelationships", significantRelationships);
    return (
      <fieldset className="form__significantRelationships">
        <legend className="form__section-title">Significant Relationships
        <span className="required_field">*</span></legend>
        <p className="form__section-description">
          List the professional relationships (2-3 is enough) that you can seek advice in case you need, who provide you with professional insights in your day to day
        </p>
        {significantRelationships && !!significantRelationships.length && significantRelationships.map((item, index) => {
          return (
            <FormSignificantRelationShipsItem
              key={index}
              relationships={item}
              ind={index}
              handleRemoveSignificantRelationships={handleRemoveSignificantRelationships}
              handleSignificantRelationshipsInput={handleSignificantRelationshipsInput} />
          );
        }
        )}
        <div>
          <FormInput
            labelContent="Name"
            styles="form__input"
            inputType="text"
            inputName="name"
            inputValue={name}
            example="Ex: Steve Jobs"
            handleInputChange={handleDefaultInputChangeSignificantRelationships}
          />
          <FormInput
            labelContent="Comment"
            styles="form__input"
            inputType="text"
            inputName="comment"
            inputValue={comment}
            example="Ex: "
            handleInputChange={handleDefaultInputChangeSignificantRelationships}
          />
          <FormInput
            labelContent="Role"
            styles="form__input"
            inputType="text"
            inputName="role"
            inputValue={role}
            example="Ex: CEO"
            handleInputChange={handleDefaultInputChangeSignificantRelationships}
          />
          <FormInput
            labelContent="Contact"
            styles="form__input"
            inputType="email"
            inputName="contact"
            inputValue={contact}
            example="Ex: email@email.com"
            handleInputChange={handleDefaultInputChangeSignificantRelationships}
          />
          <FormInput
            labelContent="Company"
            styles="form__input"
            inputType="text"
            inputName="company"
            inputValue={company}
            example="Ex: IBM"
            handleInputChange={handleDefaultInputChangeSignificantRelationships}
          />
          <Button
            buttonType="button"
            styles="add-btn"
            handleButtonClick={handleAddSignificantRelationships}
          >
            Add
              </Button>

        </div>
      </fieldset>
    );
  }
}

FormSignificantRelationShips.propTypes = {
  significantRelationshipsDefault: PropTypes.object.isRequired,
  significantRelationships: PropTypes.array.isRequired,
  handleDefaultInputChangeSignificantRelationships: PropTypes.func.isRequired,
  handleAddSignificantRelationships: PropTypes.func.isRequired,
  handleRemoveSignificantRelationships: PropTypes.func.isRequired,
  handleSignificantRelationshipsInput: PropTypes.func.isRequired
};


export default FormSignificantRelationShips;
