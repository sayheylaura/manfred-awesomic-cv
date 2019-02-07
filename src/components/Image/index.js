import React, { Component } from "react";
import PropTypes from "prop-types";

class Image extends Component {
  render() {
    const { image } = this.props;
    return (
      <div
        className="author__image"
        style={{ backgroundImage: `url(${image})` }}
      />
    );
  }
}

Image.propTypes = {
  image: PropTypes.string.isRequired
};

export default Image;
