import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Cv from "../Cv";
import Button from "../Button";

class Preview extends Component {
  render() {
    const { sample, handlePrintBtn } = this.props;
    return (
      <Fragment>
        <div className="button__container">
        <Button
          buttonType="button"
          styles="preview__print-btn"
          handleButtonClick={handlePrintBtn}
        />
        <Button
          buttonType="button"
          styles="preview__share-btn"
          handleButtonClick={handlePrintBtn}
        />
        </div>
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
