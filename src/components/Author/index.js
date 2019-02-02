import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "../Profile";

class Author extends Component {
  render() {
    const { sampleAuthor } = this.props;
    return (
      <Profile sampleProfile={sampleAuthor.profile} />
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
