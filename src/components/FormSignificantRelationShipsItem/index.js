import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../FormInput';
import Button from '../Button';
import FormTextarea from "../FormTextarea";

class FormSignificantRelationShipsItem extends Component {
  constructor(props) {
    super(props);

    this.handleRemoveBtn = this.handleRemoveBtn.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleRemoveBtn() {
    const { handleRemoveSignificantRelationships, ind } = this.props;
    handleRemoveSignificantRelationships(ind);
  }

  handleInputChange(event) {
    const { value, name } = event.currentTarget;
    const { handleSignificantRelationshipsInput, ind } = this.props;
    handleSignificantRelationshipsInput(value, name, ind);
  }

  render() {
    const { ind, item, significantRelationships } = this.props;
    const { name, comment, role, contact, company } = item;
    return (
      <div className="form__container">
        <p className="form__container-title">{`Relationship ${ind + 1} of ${significantRelationships.length}`}</p>

        <FormInput
          labelContent="Name"
          styles="form__input"
          inputType="text"
          inputName="name"
          inputValue={name}
          example="Ex: Steve Jobs"
          handleInputChange={this.handleInputChange}
        />

        {/* <FormInput
          labelContent="Comment"
          styles="form__input"
          inputType="text"
          inputName="comment"
          inputValue={comment}
          example="Ex: Mentor and good friend"
          handleInputChange={this.handleInputChange}
        /> */}

        <FormTextarea
          labelContent="Comment"
          textAreaStyles="textarea"
          textAreaLabelStyles="label"
          textName="comment"
          textValue={comment}
          example="Ex: Mentor and good friend"
          handleTextChange={this.handleInputChange}
        />

        <FormInput
          labelContent="Role"
          styles="form__input"
          inputType="text"
          inputName="role"
          inputValue={role}
          example="Ex: CEO"
          handleInputChange={this.handleInputChange}
        />

        <FormInput
          labelContent="Contact"
          styles="form__input"
          inputType="email"
          inputName="contact"
          inputValue={contact}
          example="Ex: email@email.com"
          handleInputChange={this.handleInputChange}
        />

        <FormInput
          labelContent="Company"
          styles="form__input"
          inputType="text"
          inputName="company"
          inputValue={company}
          example="Ex: IBM"
          handleInputChange={this.handleInputChange}
        />

        <div className="remove-btn__container">
          <Button
            buttonType="button"
            styles="add-btn"
            handleButtonClick={this.handleRemoveBtn}
          >
            Remove
          </Button>
        </div>
      </div>
    );
  }
}

FormSignificantRelationShipsItem.propTypes = {
  ind: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  significantRelationships: PropTypes.array.isRequired,
  handleRemoveSignificantRelationships: PropTypes.func.isRequired,
  handleSignificantRelationshipsInput: PropTypes.func.isRequired
}

export default FormSignificantRelationShipsItem;
