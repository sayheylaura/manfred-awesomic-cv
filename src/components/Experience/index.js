import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Company from '../Company';


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
                            <Company key={index} company={item} />
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