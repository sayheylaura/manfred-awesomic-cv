import React, { Component } from 'react';
import PropTypes from "prop-types";

class PublicLinks extends Component {
  render() {
    const {profileLinks} = this.props;
    return (
      <div className="publicLinks__wrapper">
        <ul className="publicLinks__list">
        {profileLinks.map((item, index)=>{
          return(
            <li className="publicLinks__list-item"key={index}>
              <a className="publicLinks__list-anchor"href={item}>{item}</a>
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
}
PublicLinks.propTypes = {
  profileLinks: PropTypes.array.isRequired
};

export default PublicLinks;
