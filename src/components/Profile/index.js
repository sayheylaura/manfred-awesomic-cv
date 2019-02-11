import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Image from "../Image";
import ProfileRoles from "../ProfileRoles";
import PublicLinks from "../PublicLinks";

function getAge(DOB) {
  let today = new Date();
  let todayYear = today.getFullYear();
  let dobYear = DOB.slice(0, 4);
  const dobInt = parseInt(dobYear);
  let age = todayYear - dobInt;
  const monthDOB = DOB.slice(5, 7);
  let monthInt = parseInt(monthDOB);
  let m = today.getMonth();
  let d = today.getDate();
  let dobDay = DOB.slice(8, 11);
  let dobDayInt = parseInt(dobDay);
  if (m < monthInt || (m === monthInt && d < dobDayInt)) {
    age = age - 1;
    return `${age} years old`;
  } else {
    return `${age} years old`;
  }
}

class Profile extends Component {
  render() {
    const { sampleProfile } = this.props;
    const {
      image,
      name,
      roles,
      birthday,
      yearsOfExperience,
      publicLinks
    } = sampleProfile;
    return (
      <Fragment>
        <div className="author__basic-data">
          {image && <Image image={image} />}
          <h2 className="author__name">{name}</h2>
        </div>
        <ProfileRoles sampleProfileRoles={roles} />
        <div className="author-data__container">
          <p className="author__birthday">{getAge(birthday)}</p>
          <p className="author__yearsOfExperience">
            {yearsOfExperience} years of experience
          </p>
        </div>
        {publicLinks && !!publicLinks.length && (
          <PublicLinks profileLinks={publicLinks} />
        )}
      </Fragment>
    );
  }
}

Profile.propTypes = {
  sampleProfile: PropTypes.object.isRequired
};

export default Profile;
