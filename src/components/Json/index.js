import React, { Component } from "react";
import PropTypes from "prop-types";
import FormTextarea from "../FormTextarea";

class Json extends Component {
  render() {
    const { sample, handleJsonText } = this.props;
    const parsedSample = JSON.stringify(sample);
    return (
      <section className="json__wrapper">
        <h2 className="json__title">JSON viewer</h2>
        <p className="json__guidelines">
          Paste here your JSON and check the CV created. When you're done
          modifying it, your new JSON will be here waiting to be copied back!
        </p>
        <FormTextarea
          labelContent="JSON code"
          textName="json"
          textValue={parsedSample}
          handleTextChange={handleJsonText}
        />
      </section>
    );
  }
}

Json.propTypes = {
  sample: PropTypes.object.isRequired,
  handleJsonText: PropTypes.func.isRequired
};

export default Json;
