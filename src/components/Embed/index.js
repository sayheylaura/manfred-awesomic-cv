import React, { Component } from 'react';
import Cv from '../Cv';

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

export default Embed;
