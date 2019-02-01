import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import RoleList from '../RoleList';

class Company extends Component {

    render() {
        const {company} = this.props.experience;
        return (
            <li className="company__item">
            {company.map((item, index)=>{
                return (
                  <Fragment key={index}>
                    <p className="company__name">Nombre de la compañía: {item.name}</p>
                    <RoleList  roles={item.roles}/>
                  </Fragment>
                );
            })}
            </li>
        );
    }
}

Company.propTypes = {
  experience: PropTypes.object.isRequired
};

export default Company;
