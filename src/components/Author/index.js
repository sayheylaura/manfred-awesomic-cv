import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Profile from "../Profile";
import TransportableSkills from "../TransportableSkills";
import Intro from "../Intro";
import SignificantRelationships from "../SignificantRelationships";
import SignificantExperience from "../SignificantExperience";

class Author extends Component {
  render() {
    const { sampleAuthor } = this.props;
    return (
      <Fragment>
      <Profile sampleProfile={sampleAuthor.profile} />
      <Intro sampleIntro={sampleAuthor.intro}/>
    {/* ProfessionalGoals */}
      <TransportableSkills sampleTransSkills={sampleAuthor.transportableSkills}/>
      <SignificantExperience sampleSigExperience={sampleAuthor.significantExperience}/>
      <SignificantRelationships sampleSigRelations={sampleAuthor.significantRelationships}/>

      </Fragment>
    );
  }
}

Author.propTypes = {
  sampleAuthor: PropTypes.object.isRequired
};

export default Author;
