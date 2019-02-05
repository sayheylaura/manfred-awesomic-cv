import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import Profile from "../Profile";
import TransportableSkills from "../TransportableSkills";
import Intro from "../Intro";
import SignificantRelationships from "../SignificantRelationships";
import SignificantExperience from "../SignificantExperience";
import ProfessionalGoals from "../ProfessionalGoals";

class Author extends Component {
  render() {
    const { sampleAuthor } = this.props;
    const {
      profile,
      intro,
      professionalGoals,
      transportableSkills,
      significantExperience,
      significantRelationships
    } = sampleAuthor;
    return (
      <Fragment>
        <Profile sampleProfile={profile} />
        {intro && <Intro sampleIntro={intro} />}

        {professionalGoals && professionalGoals.length && (
          <ProfessionalGoals sampleProfessionalGoals={professionalGoals} />
        )}

        {transportableSkills && transportableSkills.length && (
          <TransportableSkills sampleTransSkills={transportableSkills} />
        )}

        {significantExperience && significantExperience.length && (
          <SignificantExperience sampleSigExperience={significantExperience} />
        )}

        {significantRelationships && significantRelationships.length && (
          <SignificantRelationships
            sampleSigRelations={significantRelationships}
          />
        )}
      </Fragment>
    );
  }
}

Author.propTypes = {
  sampleAuthor: PropTypes.object.isRequired
};

export default Author;
