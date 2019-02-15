import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RoleList from "../RoleList";
import ReferencesList from "../ReferencesList";
import "./Experience.scss";


class Experience extends Component {

  render() {
    const { sampleExperience } = this.props;
    return (
      <div className="experience__wrapper wrapper">
        <h2 className="experience__title title">Experience</h2>
        <ul className="experience__list">
          {sampleExperience.map((item, index) => {
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
      </div>
    );
  }
}

Experience.propTypes = {
  sampleExperience: PropTypes.array.isRequired
};


export default Experience;
