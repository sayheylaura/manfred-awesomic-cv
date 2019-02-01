import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Author extends Component {
  render() {
    const { sampleAuthor } = this.props;
    return (
      <Fragment>
        {sampleAuthor.profile.map((item, index) => {
          return (
            <Fragment key={index}>
              <div className="author__basic-data">
                <img
                  className="author__image"
                  src={item.image}
                  alt={item.name}
                />
                <p className="author__name">{item.name}</p>
                {item.roles.map((item, index) => {
                  return (
                    <p key={index} className="author__role">
                      {item}
                    </p>
                  );
                })}
              </div>
              <p className="author__birthday">{item.birthday}</p>
              <p className="author__yearsOfExperience">
                {item.yearsOfExperience}
              </p>
              {/* Instancia:
              - Profile
              - Intro
              - ProfessionalGoals
              - TransportableSkills
              - SignificantExperience
              - SignificantRelationships */}
            </Fragment>
          );
        })}
      </Fragment>
    );
  }
}

Author.propTypes = {
  sampleAuthor: PropTypes.object.isRequired
};

export default Author;
