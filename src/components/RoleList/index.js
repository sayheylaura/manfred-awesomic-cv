import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RoleList extends Component {

  render() {
    const { roles } = this.props;
    console.log(roles);
    return (
      <ul className="role-list__list">
        {roles.map((item, index) => {
          return (
            <li className="role-list__item" key={index}>
              <div className="role-list__role">{item.role}</div>
              <div className="role-list__date">{item.from} — {item.until}</div>
            </li>
          );
        })}
      </ul>
    );
  }
}

RoleList.propTypes = {
  roles: PropTypes.array.isRequired
};

export default RoleList;
