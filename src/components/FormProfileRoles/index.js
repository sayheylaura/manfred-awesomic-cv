import React, { Component } from 'react';
import PropTypes from "prop-types";
import Button from "../Button";
import FormSelect from "../FormSelect";
import FormProfileRoleItem from "../FormProfileRoleItem";

const rolesArr = ["project manager", "product manager", "operational manager", "analyst", "business analyst", "qa manager", "software architect", "process analyst", "test engineer", "test analyst", "database administrator", "developer", "software engineer", "product owner", "scrum master", "team lead", "UX designer", "UI designer"]

class FormProfileRoles extends Component {
  render() {
    const {
      roles,
      rolesDefault,
      handleDefaultInputChange,
      handleAddRoleItem,
      handleRemoveRoleItem,
      handleRoleChange
    } = this.props;

    return (
      <div>
        <p>Roles</p>

        <p>
          The ones that better describe your previous or future positions
        </p>

        {roles && !!roles.length && roles.map((item, index) => {
          return (
            <FormProfileRoleItem
              key={index}
              ind={index}
              item={item}
              roles={roles}
              rolesArr={rolesArr}
              handleRemoveRoleItem={handleRemoveRoleItem}
              handleRoleChange={handleRoleChange}
            />
          );
        })}

        <FormSelect
          labelContent="More roles"
          styles="form__select"
          selectName="rolesDefault"
          selectValue={rolesDefault}
          handleSelectChange={handleDefaultInputChange}
          selectOptions={rolesArr}
        />

        <Button
          buttonType="button"
          styles="add-btn"
          handleButtonClick={handleAddRoleItem}
        >
          Add
      </Button>
      </div>
    );
  }
}
FormProfileRoles.propTypes = {
  roles: PropTypes.array.isRequired,
  rolesDefault: PropTypes.string.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleAddRoleItem: PropTypes.func.isRequired,
  handleRemoveRoleItem: PropTypes.func.isRequired,
  handleRoleChange: PropTypes.func.isRequired
};

export default FormProfileRoles;
