import React, { Component } from 'react';
import FormInput from '../FormInput';
import Button from '../Button';
// import PropTypes from 'prop-types';
import FormSignificantRelationShipsItem from '../FormSignificantRelationShipsItem';


class FormSignificantRelationShips extends Component {

  render() {
    const { significantRelationships, significantRelationshipsDefault, handleDefaultInputChange, handleAddSignificantRelationships, handleRemoveSignificantRelationships, handleSignificantRelationshipsInput } = this.props;
    console.log(significantRelationships);
    return (
      <div>
        {significantRelationships.map((item, index) => {
          return (
            <FormSignificantRelationShipsItem key={index} relationships={item} ind={index} handleRemoveSignificantRelationships={handleRemoveSignificantRelationships} handleSignificantRelationshipsInput ={handleSignificantRelationshipsInput }/>
          );
        }
        )}
        <div>
          <FormInput
            labelContent="Name"
            styles="form__input"
            inputType="text"
            inputName="relationShipsName"
            inputValue={significantRelationshipsDefault}
            example="Ex: Steve Jobs"
            handleInputChange={handleDefaultInputChange}
          />
          <FormInput
            labelContent="Comment"
            styles="form__input"
            inputType="text"
            inputName="relationShipsComment"
            inputValue={significantRelationshipsDefault}
            example="Ex: "
            handleInputChange={handleDefaultInputChange}
          />
          <FormInput
            labelContent="Role"
            styles="form__input"
            inputType="text"
            inputName="relationShipsRole"
            inputValue={significantRelationshipsDefault}
            example="Ex: CEO"
            handleInputChange={handleDefaultInputChange}
          />
          <FormInput
            labelContent="Contact"
            styles="form__input"
            inputType="email"
            inputName="relationShipsContact"
            inputValue={significantRelationshipsDefault}
            example="Ex: email@email.com"
            handleInputChange={handleDefaultInputChange}
          />
          <FormInput
            labelContent="Company"
            styles="form__input"
            inputType="text"
            inputName="relationShipsCompany"
            inputValue={significantRelationshipsDefault}
            example="Ex: IBM"
            handleInputChange={handleDefaultInputChange}
          />
          <Button
            buttonType="button"
            styles="add-btn"
            handleButtonClick={handleAddSignificantRelationships}
          >
            Add
              </Button>
        </div>

      </div>
    );
  }
}

export default FormSignificantRelationShips;
