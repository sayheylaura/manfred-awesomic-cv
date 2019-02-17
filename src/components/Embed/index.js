import React, { Component } from 'react';
import Cv from '../Cv';
import PropTypes from "prop-types";

class Embed extends Component {

  render() {
    const {sample, cvRef, embedRef} = this.props;
    return (
      <div ref={embedRef}>
      <Cv
        sample={sample}
        cvRef={cvRef}
      />
      </div>
    );
  }
}

Embed.propTypes = {
  sample: PropTypes.object.isRequired,
  cvRef: PropTypes.object.isRequired,
  embedRef: PropTypes.object.isRequired
};


export default Embed;
