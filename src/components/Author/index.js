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
    return (
      <Fragment>
        <Profile sampleProfile={sampleAuthor.profile} />
        {sampleAuthor.intro && <Intro sampleIntro={sampleAuthor.intro} />}
        <ProfessionalGoals
          sampleProfessionalGoals={sampleAuthor.professionalGoals}
        />
        <TransportableSkills
          sampleTransSkills={sampleAuthor.transportableSkills}
        />
        <SignificantExperience
          sampleSigExperience={sampleAuthor.significantExperience}
        />
        <SignificantRelationships
          sampleSigRelations={sampleAuthor.significantRelationships}
        />
      </Fragment>
    );
  }
}

Author.propTypes = {
  sampleAuthor: PropTypes.object.isRequired
};

export default Author;
