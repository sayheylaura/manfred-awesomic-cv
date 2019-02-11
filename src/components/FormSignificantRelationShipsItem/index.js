import React, { Component } from 'react';
import FormInput from '../FormInput';
import Button from '../Button';

class FormSignificantRelationShipsItem extends Component {
  constructor(props) {
    super(props);

    this.handleRemoveBtn = this.handleRemoveBtn.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleRemoveBtn() {
    const { handleRemoveRelationshipsItem, ind } = this.props;
    handleRemoveRelationshipsItem(ind);
  }

  handleInputChange(event) {
    const { value } = event.currentTarget;
    const { handleRemoveRelationshipsItem, ind } = this.props;
    handleRemoveRelationshipsItem(value, ind);

  render() {
    const { relationships, ind } = this.props;
    const { name, comment, role, contact, company } = relationships;
    return (
      <div ind={ind}>
        <FormInput
          labelContent="Name"
          styles="form__input"
          inputType="text"
          inputName="relationShipsName"
          inputValue={name}
          example="Ex: Steve Jobs"
        // handleInputChange={this.handleInputChange}
        />
        <FormInput
          labelContent="Comment"
          styles="form__input"
          inputType="text"
          inputName="relationShipsComment"
          inputValue={comment}
          example="Ex: "
        // handleInputChange={this.handleInputChange}
        />
        <FormInput
          labelContent="Role"
          styles="form__input"
          inputType="text"
          inputName="relationShipsRole"
          inputValue={role}
          example="Ex: CEO"
        // handleInputChange={this.handleInputChange}
        />
        <FormInput
          labelContent="Contact"
          styles="form__input"
          inputType="email"
          inputName="relationShipsContact"
          inputValue={contact}
          example="Ex: email@email.com"
        // handleInputChange={this.handleInputChange}
        />
        <FormInput
          labelContent="Company"
          styles="form__input"
          inputType="text"
          inputName="relationShipsCompany"
          inputValue={company}
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

    );
  }
}

export default FormSignificantRelationShipsItem;
