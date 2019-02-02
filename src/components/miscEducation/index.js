import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class MiscEducation extends Component {
  render() {
    const { miscEducation } = this.props;
    return (
      <Fragment>
        <h3>Miscellany</h3>
        <ul className="miscEducation__list">
          {miscEducation.map((item, index) => {
            return(
            <li key={index} className="miscEducation__item">
              {item}
            </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

MiscEducation.propTypes = {
  miscEducation: PropTypes.arr
};

export default MiscEducation;
