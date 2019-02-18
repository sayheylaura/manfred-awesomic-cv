import React, { Component } from 'react';
import FormInput from '../FormInput';
import Button from '../Button';
import PropTypes from 'prop-types';
import FormSignificantRelationShipsItem from '../FormSignificantRelationShipsItem';
import FormTextarea from "../FormTextarea";

class FormSignificantRelationShips extends Component {
  render() {
    const {
      significantRelationships,
      significantRelationshipsDefault,
      handleDefaultInputChangeSignificantRelationships,
      handleAddSignificantRelationships,
      handleRemoveSignificantRelationships,
      handleSignificantRelationshipsInput
    } = this.props;

    const {
      name,
      comment,
      role,
      contact,
      company
    } = significantRelationshipsDefault;

    return (
      <fieldset className="form__fieldset">
        <legend className="form__section-title">Significant Relationships
        <span className="required_field">*</span></legend>

        <p className="form__section-description">
          List the professional relationships (2-3 is enough) that you can seek advice in case you need, who provide you with professional insights in your day to day
        </p>

        {significantRelationships && !!significantRelationships.length && significantRelationships.map((item, index) => {
          return (
            <FormSignificantRelationShipsItem
              key={index}
              ind={index}
              item={item}
              significantRelationships={significantRelationships}
              handleRemoveSignificantRelationships={handleRemoveSignificantRelationships}
              handleSignificantRelationshipsInput={handleSignificantRelationshipsInput}
            />
          );
        })}

        <div className="form__container">
          <p className="form__container-title">More relationships</p>

          <FormInput
            labelContent="Name"
            styles="form__input"
            inputType="text"
            inputName="name"
            inputValue={name}
            example="Ex: Steve Jobs"
            handleInputChange={handleDefaultInputChangeSignificantRelationships}
          />

          {/* <FormInput
            labelContent="Comment"
            styles="form__input"
            inputType="text"
            inputName="comment"
            inputValue={comment}
            example="Ex: Mentor and good friend"
            handleInputChange={handleDefaultInputChangeSignificantRelationships}
          /> */}

          <FormTextarea
            labelContent="Comment"
            textAreaStyles="textarea"
            textAreaLabelStyles="label"
            textName="comment"
            textValue={comment}
            example="Ex: Mentor and good friend"
            handleTextChange={handleDefaultInputChangeSignificantRelationships}
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
  significantRelationships: PropTypes.array.isRequired,
  significantRelationshipsDefault: PropTypes.object.isRequired,
  handleDefaultInputChangeSignificantRelationships: PropTypes.func.isRequired,
  handleAddSignificantRelationships: PropTypes.func.isRequired,
  handleRemoveSignificantRelationships: PropTypes.func.isRequired,
  handleSignificantRelationshipsInput: PropTypes.func.isRequired
};

export default FormSignificantRelationShips;
