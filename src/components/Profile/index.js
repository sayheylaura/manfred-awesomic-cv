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
          return (
            <Fragment key={index}>
              <div className="author__basic-data">
                {item.image ? (
                  <div className="author__image" style={{ backgroundImage: `url(${item.image})` }}/>
                ) : (
                  <div className="author__image" style={{ backgroundImage: `url(${user})` }}/>
                  )}
                <h2 className="author__name">{item.name}</h2>
              </div>
              <ProfileRoles sampleProfileRoles={item.roles} />
              <p className="author__birthday">{item.birthday}</p>
              <p className="author__yearsOfExperience">
                {item.yearsOfExperience} years of experience
              </p>
              {item.publicLinks && (
                <PublicLinks profileLinks={item.publicLinks} />
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
