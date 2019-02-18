import React, { Component } from "react";
import PropTypes from "prop-types";
import FormTextarea from "../FormTextarea";

class Json extends Component {
  render() {
    const { sample, handleJsonText } = this.props;
    const parsedSample = JSON.stringify(sample, undefined, 4);
    return (
      <section className="json__wrapper">
        <h2 className="json__title">JSON editor</h2>
        <p className="json__guidelines">
          Paste here your JSON and check out the CV created in the CV preview
          section. You can edit your personal data in the Form section. When
          you're done modifying it, your new CV will be ready and a brand new
          JSON will be here waiting to be copied back!
        </p>
        <FormTextarea
          textAreaStyles="textarea__json"
          textAreaLabelStyles="textarea__label"
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
