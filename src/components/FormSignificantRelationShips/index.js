import React, { Component } from 'react';
import FormInput from '../FormInput';
import Button from '../Button';
// import PropTypes from 'prop-types';
import FormSignificantRelationShipsItem from '../FormSignificantRelationShipsItem';


class FormSignificantRelationShips extends Component {
  // constructor(props) {
  //   super(props);

  //   this.handleRemoveBtn = this.handleRemoveBtn.bind(this);
  //   this.handleInputChange = this.handleInputChange.bind(this);
  // }

  // handleRemoveBtn() {
  //   const { handleRemoveRelationshipsItem, ind } = this.props;
  //   handleRemoveRelationshipsItem(ind);
  // }

  // handleInputChange(event) {
  //   const { value } = event.currentTarget;
  //   const { handleRemoveRelationshipsItem, ind } = this.props;
  //   handleRemoveRelationshipsItem(value, ind);
  }
  render() {
    const { significantRelationships, significantRelationshipsDefault } = this.props;
    console.log(significantRelationships);
    return (
      <div>
        {significantRelationships.map((item, index) => {
          return (
            <FormSignificantRelationShipsItem key={index} relationships={item} ind={index} />
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
          // handleInputChange={this.handleInputChange}
          />
          <FormInput
            labelContent="Comment"
            styles="form__input"
            inputType="text"
            inputName="relationShipsComment"
            inputValue={significantRelationshipsDefault}
            example="Ex: "
          // handleInputChange={this.handleInputChange}
          />
          <FormInput
            labelContent="Role"
            styles="form__input"
            inputType="text"
            inputName="relationShipsRole"
            inputValue={significantRelationshipsDefault}
            example="Ex: CEO"
          // handleInputChange={this.handleInputChange}
          />
          <FormInput
            labelContent="Contact"
            styles="form__input"
            inputType="email"
            inputName="relationShipsContact"
            inputValue={significantRelationshipsDefault}
            example="Ex: email@email.com"
          // handleInputChange={this.handleInputChange}
          />
          <FormInput
            labelContent="Company"
            styles="form__input"
            inputType="text"
            inputName="relationShipsCompany"
            inputValue={significantRelationshipsDefault}
            example="Ex: IBM"
          // handleInputChange={this.handleInputChange}
          />
          <Button
            buttonType="button"
            styles="add-btn"
          // handleButtonClick={handleAddGoal}
          >
            Add
              </Button>
        </div>

      </div>
    );
  }
}

export default FormSignificantRelationShips;
