import React, { Component } from "react";
import PropTypes from "prop-types";
import Cv from "../Cv";
import Button from "../Button";

class Preview extends Component {
  render() {
    const { sample, handlePrintBtn } = this.props;
    return (
      <div className="preview__wrapper">
        <Button
          buttonType="button"
          styles="preview__print-btn"
          handleButtonClick={handlePrintBtn}
        >
        </Button>
        <Cv sample={sample} />
      </div>
    );
  }
}

Preview.propTypes = {
  sample: PropTypes.object.isRequired,
  handlePrintBtn: PropTypes.func.isRequired
};

export default Preview;
