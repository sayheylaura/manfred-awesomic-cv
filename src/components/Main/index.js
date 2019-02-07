import React, { Component } from "react";
import PropTypes from "prop-types";
import Preview from "../Preview";

class Main extends Component {
  render() {
    const { sample, handlePrintBtn } = this.props;
    return (
      <main className="main">
        <Preview sample={sample} handlePrintBtn={handlePrintBtn} />
      </main>
    );
  }
}

Main.propTypes = {
  sample: PropTypes.object.isRequired
};

export default Main;
