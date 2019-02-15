import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import FormInput from "../FormInput";
import Button from "../Button";

class FormExperienceItem extends Component {
  constructor(props) {
    super(props);

    this.handleRemoveBtn = this.handleRemoveBtn.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleRemoveBtn() {
    const { handleRemoveExperienceItem, ind } = this.props;
    handleRemoveExperienceItem(ind);
  }

  handleInputChange(event) {
    const { value, name } = event.currentTarget;
    const { handleExperienceChange, ind } = this.props;
    handleExperienceChange(value, name, ind);
  }

  render() {
    const { company } = this.props.item;
    return (
      <div>
        {company.map((item, index) => {
          return (
            <Fragment key={index}>
              <FormInput
                labelContent="Company name"
                styles="form__input"
                inputType="text"
                inputName="name"
                inputValue={item.name}
                example="Ex: Google"
                handleInputChange={this.handleInputChange}
              />
              <Button
                buttonType="button"
                styles="remove-btn"
                handleButtonClick={this.handleRemoveBtn}
              >
                Remove
              </Button>
            </Fragment>
          );
        })}
      </div>
    );
  }
}

FormExperienceItem.propTypes = {
  ind: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  handleRemoveExperienceItem: PropTypes.func.isRequired,
  handleExperienceChange: PropTypes.func.isRequired
};

export default FormExperienceItem;
