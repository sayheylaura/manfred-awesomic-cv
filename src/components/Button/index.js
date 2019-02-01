import React from "react";
import PropTypes from "prop-types";

const Button = ({ buttonType, styles, handleButtonClick, children }) => {
  return (
    <button type={buttonType} className={styles} onClick={handleButtonClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  buttonType: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired
  // handleButtonClick: PropTypes.func.isRequired
};

export default Button;
