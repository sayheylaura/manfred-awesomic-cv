import React, { Component } from "react";
import PropTypes from "prop-types";
import RoleList from "../RoleList";
import ReferencesList from "../ReferencesList";

class Company extends Component {
  render() {
    const { company } = this.props.experience;
    return (
      <ul className="company__item">
        {company.map((item, index) => {
          const { name, roles, references } = item;
          return (
            <li key={index} className="company__item">
              <h4 className="company__name">{name}</h4>
              <RoleList roles={roles} />
              {references && !!references.length && (
                <ReferencesList references={references} />
              )}
            </li>
          );
        })}
      </ul>
    );
  }
}

Company.propTypes = {
  experience: PropTypes.object.isRequired
};

export default Company;
