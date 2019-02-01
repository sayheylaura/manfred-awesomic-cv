import React, { Component } from "react";
import PropTypes from "prop-types";
import Cv from "../Cv";
import Button from "../Button";

class Preview extends Component {
  render() {
    const { sample } = this.props;
    return (
      <div className="preview__wrapper">
        <Button buttonType="button" styles="preview__print-btn">
          Imprimir
        </Button>
        <Cv sample={sample} />
      </div>
    );
  }
}

Preview.propTypes = {
  sample: PropTypes.object.isRequired
};

export default Preview;
