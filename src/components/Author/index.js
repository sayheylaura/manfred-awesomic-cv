import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Profile from "../Profile";
import Intro from "../Intro";
import SignificantRelationships from "../SignificantRelationships";

class Author extends Component {
  render() {
    const { sampleAuthor } = this.props;
    return (
      <Fragment>
      <Profile sampleProfile={sampleAuthor.profile} />
      {/* // Instancia: */}
      <Intro sampleIntro={sampleAuthor.intro}/>
      {/* // - ProfessionalGoals
      // - TransportableSkills
      // - SignificantExperience*/}
      <SignificantRelationships sampleSigRelations={sampleAuthor.significantRelationships}/>
      </Fragment>
    );
  }
}

Author.propTypes = {
  sampleAuthor: PropTypes.object.isRequired
};

export default Author;
