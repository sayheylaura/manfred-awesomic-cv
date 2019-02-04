import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import ProfileRoles from "../ProfileRoles";
import PublicLinks from "../PublicLinks";

class Profile extends Component {
  render() {
    const { sampleProfile } = this.props;
    return (
      <Fragment>
        {sampleProfile.map((item, index) => {
          return (
            <Fragment key={index}>
              <div className="author__basic-data">
                <img
                  className="author__image"
                  src={item.image}
                  alt={item.name}
                />
                <h2 className="author__name">{item.name}</h2>
              </div>

              <ProfileRoles sampleProfileRoles={item.roles} />

              <p className="author__birthday">{item.birthday}</p>
              <p className="author__yearsOfExperience">
                {item.yearsOfExperience} years of experience
              </p>

              <PublicLinks profileLinks={item.publicLinks} />
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
