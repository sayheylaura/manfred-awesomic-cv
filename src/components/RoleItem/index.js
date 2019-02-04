import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Challenges from '../Challenges';

class RoleItem extends Component {
  render() {

    const { role, from, until, challenges } = this.props.sampleRoleItem;

    return (
      <li className="role-list__item">
        <p className="role-list__role">{role}</p>
        <p className="role-list__date">{from} — {until}</p>
        <Challenges challenges={challenges}/>
      </li>
    );
  }
}

RoleItem.propTypes = {
  sampleRoleItem : PropTypes.object.isRequired
};

export default RoleItem;
