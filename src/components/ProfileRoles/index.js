import React, { Component } from "react";
import PropTypes from "prop-types";

class ProfileRoles extends Component {
  render() {
    const { sampleProfileRoles } = this.props;
    return (
      <ul className="profile__roles-list">
        {sampleProfileRoles.map((item, index) => {
          return (
            <li key={index} className="author__role">
              {item}
            </li>
          );
        })}
      </ul>
    );
  }
}

ProfileRoles.propTypes = {
  sampleProfileRoles: PropTypes.array.isRequired
};

export default ProfileRoles;
