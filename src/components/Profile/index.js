import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
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
                <p className="author__name">{item.name}</p>
                {item.roles.map((item, index) => {
                  return (
                    <p key={index} className="author__role">
                      {item}
                    </p>
                  );
                })}
              </div>
              <p className="author__birthday">{item.birthday}</p>
              <PublicLinks profileLinks={item.publicLinks}/>
              <p className="author__yearsOfExperience">
                {item.yearsOfExperience}
              </p>
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
