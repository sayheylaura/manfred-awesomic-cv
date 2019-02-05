import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Challenges from '../Challenges';

class RoleItem extends Component {
  render() {

    const { role, from, until, challenges } = this.props.sampleRoleItem;

    return (
      <li className="role-list__item">
      <div className="role-list__wrapper">
        <h3 className="role-list__role-name">{role}</h3>
        <span className="role-list__date">{from} — {until}</span>
      </div>
        <Challenges challenges={challenges}/>
      </li>
    );
  }
}

RoleItem.propTypes = {
  sampleRoleItem : PropTypes.object.isRequired
};

export default RoleItem;
