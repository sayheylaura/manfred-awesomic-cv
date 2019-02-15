import React, { Component } from 'react';
import PropTypes from "prop-types";
import Button from "../Button";
import FormSelect from "../FormSelect";

class FormProfileRoleItem extends Component {
  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleRemoveBtn = this.handleRemoveBtn.bind(this);
  }

  handleRemoveBtn() {
    const { handleRemoveRoleItem, ind } = this.props;
    handleRemoveRoleItem(ind);
  }

  handleChange(event) {
    const { value } = event.currentTarget;
    const { handleRoleChange, ind } = this.props;
    handleRoleChange(value, ind);
  }

  render() {
    const { item, rolesArr } = this.props;
    return (
      <div>
        <FormSelect
          selectName="roles"
          labelContent="Role"
          selectValue={item}
          styles="form__select"
          handleSelectChange={this.handleChange}
          selectOptions={rolesArr}
      />

      <Button
          buttonType="button"
          styles="remove-btn"
          handleButtonClick={this.handleRemoveBtn}
        >
          Remove
      </Button>

      </div>
     );
  }
}

FormProfileRoleItem.propTypes = {
  item: PropTypes.string.isRequired,
  ind: PropTypes.number.isRequired,
  rolesArr: PropTypes.array.isRequired,
  handleRemoveRoleItem: PropTypes.func.isRequired,
  handleRoleChange: PropTypes.func.isRequired
};

export default FormProfileRoleItem;
