import React, { Component } from 'react';

class Company extends Component {

    render() { 
        const {company} = this.props.company;
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

export default Company;