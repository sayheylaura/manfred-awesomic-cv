import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Company extends Component {

    render() {
        const {company} = this.props.experience;
        return (
            <li>
            {company.map((item, index)=>{
                return (
                    <p key={index}>Nombre de la compañía: {item.name}</p>

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
