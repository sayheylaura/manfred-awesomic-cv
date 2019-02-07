import React, { Component } from "react";
import PropTypes from "prop-types";
import Preview from "../Preview";
import Form from "../Form";
import Json from "../Json";

class Main extends Component {
  render() {
    const { sample, handlePrintBtn, handleJsonText } = this.props;
    return (
      <main className="main">
        <Form />
        <Json sample={sample} handleJsonText={handleJsonText} />
        <Preview sample={sample} handlePrintBtn={handlePrintBtn} />
      </main>
    );
  }
}

Main.propTypes = {
  sample: PropTypes.object.isRequired,
  handlePrintBtn: PropTypes.func.isRequired,
  handleJsonText: PropTypes.func.isRequired
};

export default Main;
