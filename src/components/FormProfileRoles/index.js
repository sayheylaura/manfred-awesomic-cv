import React, { Component } from 'react';
import PropTypes from "prop-types";
import Button from "../Button";
import FormSelect from "../FormSelect";
import FormProfileRoleItem from "../FormProfileRoleItem";

const rolesArr = ["project manager", "product manager", "operational manager", "analyst", "business analyst", "qa manager", "software architect", "process analyst", "test engineer", "test analyst", "database administrator", "developer", "software engineer", "product owner", "scrum master", "team lead", "UX designer", "UI designer"]

class FormProfileRoles extends Component {

  render() {
    const { rolesDefault, handleDefaultInputChange, handleAddRoleItem, roles, handleRemoveRoleItem, handleRoleChange } = this.props;
    return (
      <div className="form__profile-roles">
        <h3 className="form__section-title">Roles</h3>
        <p className="form__section-description">
          The ones that better describe your previous or future positions
        </p>

        {roles && !!roles.length && roles.map((item, index) => {
          return (
            <FormProfileRoleItem
              key={index}
              ind={index}
              item={item}
              roles={roles}
              handleRemoveRoleItem={handleRemoveRoleItem}
              handleRoleChange={handleRoleChange}
              rolesArr={rolesArr}
            />
          );
        })}

        <FormSelect
          selectName="rolesDefault"
          labelContent="More roles"
          selectValue={rolesDefault}
          styles="form__select"
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
