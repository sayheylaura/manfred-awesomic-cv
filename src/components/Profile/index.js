import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import ProfileRoles from "../ProfileRoles";
import PublicLinks from "../PublicLinks";
import user from "../../images/user.svg";

class Profile extends Component {
  render() {
    const { sampleProfile } = this.props;
    return (
      <Fragment>
        {sampleProfile.map((item, index) => {
          const {
            image,
            name,
            roles,
            birthday,
            yearsOfExperience,
            publicLinks
          } = item;
          return (
            <Fragment key={index}>
              <div className="author__basic-data">
                {image ? (
                  <div
                    className="author__image"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                ) : (
                  <div
                    className="author__image"
                    style={{ backgroundImage: `url(${user})` }}
                  />
                )}
                <h2 className="author__name">{name}</h2>
              </div>
              <ProfileRoles sampleProfileRoles={roles} />
              <p className="author__birthday">{birthday}</p>
              <p className="author__yearsOfExperience">
                {yearsOfExperience} years of experience
              </p>
              {publicLinks && publicLinks.length && (
                <PublicLinks profileLinks={publicLinks} />
              )}
            </Fragment>
          );
        })}
      </Fragment>
    );
  }
}

Profile.propTypes = {
  sampleProfile: PropTypes.array.isRequired
};

export default Profile;
