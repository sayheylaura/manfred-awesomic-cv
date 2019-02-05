import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import RoleList from "../RoleList";
import ReferencesList from "../ReferencesList";
import "./Company.scss";

class Company extends Component {
  render() {
    const { company } = this.props.experience;
    return (
      <li className="company__item">
        {company.map((item, index) => {
          const { name, roles, references } = item;
          return (
            <Fragment key={index}>
              <h4 className="company__name">{name}</h4>
              <RoleList roles={roles} />
              {references && references.length && (
                <ReferencesList references={references} />
              )}
            </Fragment>
          );
        })}
      </li>
    );
  }
}

Company.propTypes = {
  experience: PropTypes.object.isRequired
};

export default Company;
