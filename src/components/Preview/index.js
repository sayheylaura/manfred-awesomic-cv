import React, { Component } from 'react';
import Cv from '../Cv';

class Preview extends Component {
  render() {
    return (
      <div className="preview__wrapper">
        {/* Button
        CV */}
        <Cv />
        Hola
      </div>
    );
  }
}

export default Preview;