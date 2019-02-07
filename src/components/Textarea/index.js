import React from "react";
import PropTypes from "prop-types";

const Textarea = ({ name }) => <textarea name={name} rows="8" cols="50" />;

Textarea.propTypes = {
  name: PropTypes.string.isRequired
};

export default Textarea;
