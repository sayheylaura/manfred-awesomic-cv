import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RoleItem extends Component {
  render() {

    const { role, from, until } = this.props.sampleRoleItem;

    return (
      <li className="role-list__item">
        <p className="role-list__role">{role}</p>
        <p className="role-list__date">{from} — {until}</p>
      </li>
    );
  }
}

RoleItem.propTypes = {
  sampleRoleItem : PropTypes.object.isRequired
};

export default RoleItem;
