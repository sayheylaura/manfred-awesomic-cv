import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Cv from "../Cv";
import Button from "../Button";

class Preview extends Component {
  render() {
    const { sample, handlePrintBtn } = this.props;
    return (
      <Fragment>
        <Button
          buttonType="button"
          styles="preview__print-btn"
          handleButtonClick={handlePrintBtn}
        >
        </Button>
        <Cv sample={sample} />
      </Fragment>
    );
  }
}

Preview.propTypes = {
  sample: PropTypes.object.isRequired,
  handlePrintBtn: PropTypes.func.isRequired
};

export default Preview;
