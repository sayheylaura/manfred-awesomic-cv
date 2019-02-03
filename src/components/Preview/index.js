import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactToPrint from "react-to-print";
import Cv from "../Cv";
//import Button from "../Button";

class Preview extends Component {
  render() {
    const { sample } = this.props;
    return (
      <div className="preview__wrapper">
        <ReactToPrint
          trigger={() => (
            <button>Imprimir</button>
          )}
          content={() => this.componentRef}
        />

        <Cv sample={sample} ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

Preview.propTypes = {
  sample: PropTypes.object.isRequired
};

export default Preview;
