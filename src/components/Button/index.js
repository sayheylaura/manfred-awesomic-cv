import React, { Component } from "react";
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { typeFunction, styles, handleButtonClick, children } = this.props;
    return (
      <button type={typeFunction} className={styles} onClick={handleButtonClick}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  typeFunction: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired
}

export default Button;
