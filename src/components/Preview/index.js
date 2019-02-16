import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Cv from "../Cv";
import Button from "../Button";
import  {Link} from "react-router-dom";

class Preview extends Component {
  render() {
    const { sample, handlePrintBtn, handleHTML, cvRef } = this.props;
    return (
      <Fragment>
        <Button
          buttonType="button"
          styles="preview__print-btn"
          handleButtonClick={handlePrintBtn}
        >
        </Button>
        <Link to='/cvhtml'>
        <Button
          buttonType="button"
          styles=""
          handleButtonClick={handleHTML}
        >
          aqui viene el diiiiiiv
        </Button>
        </Link>

        <Cv sample={sample}
        cvRef={cvRef}/>
      </Fragment>
    );
  }
}

Preview.propTypes = {
  sample: PropTypes.object.isRequired,
  handlePrintBtn: PropTypes.func.isRequired
};

export default Preview;
