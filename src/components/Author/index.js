import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Profile from "../Profile";
import ProfessionalGoals from "../ProfessionalGoals";

class Author extends Component {
  render() {
    const { sampleAuthor } = this.props;
    return (
      <Fragment>
        <Profile sampleProfile={sampleAuthor.profile} />
        <ProfessionalGoals
          sampleProfessionalGoals={sampleAuthor.professionalGoals}
        />
      </Fragment>
      // Instancia:
      // - Intro
      // - ProfessionalGoals
      // - TransportableSkills
      // - SignificantExperience
      // - SignificantRelationships
    );
  }
}

Author.propTypes = {
  sampleAuthor: PropTypes.object.isRequired
};

export default Author;
