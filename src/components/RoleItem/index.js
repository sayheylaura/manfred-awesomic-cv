import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RoleItem extends Component {
  render() {
    const {roleName, roleDateFrom, roleDateuntil, index} = this.props;
    return (
      <li className="role-list__item" key={index}>
        <p className="role-list__role">{roleName}</p>
        <p className="role-list__date">{roleDateFrom} — {roleDateuntil}</p>
      </li>
    );
  }
}

RoleItem.propTypes = {
  roleName: PropTypes.string.isRequired,
  roleDateFrom: PropTypes.string.isRequired,
  roleDateuntil: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default RoleItem;
