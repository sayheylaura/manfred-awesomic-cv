import React, { Component } from 'react';
import PropTypes from "prop-types";
import Button from "../Button";
import FormSelect from "../FormSelect";

class FormProfileRoleItem extends Component {
  constructor(props) {
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
    const { ind, item, roles, rolesArr } = this.props;
    return (
      <div className="form__container">
        <FormSelect
          labelContent={`Role ${ind + 1} of ${roles.length}`}
          styles="form__select"
          selectName="roles"
          selectValue={item}
          handleSelectChange={this.handleChange}
          selectOptions={rolesArr}
        />

        <div className="remove-btn__container">
          <Button
            buttonType="button"
            styles="remove-btn"
            handleButtonClick={this.handleRemoveBtn}
          >
            Remove
          </Button>
        </div>
      </div>
    );
  }
}

FormProfileRoleItem.propTypes = {
  ind: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
  roles: PropTypes.array.isRequired,
  rolesArr: PropTypes.array.isRequired,
  handleRemoveRoleItem: PropTypes.func.isRequired,
  handleRoleChange: PropTypes.func.isRequired
};

export default FormProfileRoleItem;
