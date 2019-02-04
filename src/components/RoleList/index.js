import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RoleItem from '../RoleItem';

class RoleList extends Component {

  render() {
    const { roles } = this.props;
    return (
      <ul className="role-list__list">
        {roles.map((item, index) => {
          return (
            <RoleItem sampleRoleItem={item} key={index}/>
          //  Challenges
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
