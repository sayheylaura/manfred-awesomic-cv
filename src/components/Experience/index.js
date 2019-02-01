import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


class Experience extends Component {

    render() { 
        const {experience} = this.props.sample;
        // console.log("experience", experience);
        return ( 
            <Fragment>
                <h3>Experience</h3>
                <ul>
                    {experience.map((item, index) => {
                        return (
                            <li key={index}>
                                <h5>{item.company[0].name}</h5>
                            </li>
                        );
                    })}
                </ul>
            </Fragment>
         );
    }
}
 
Experience.propTypes = {
    sample: PropTypes.object.isRequired
  };


export default Experience;