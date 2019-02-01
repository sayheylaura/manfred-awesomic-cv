import React, { Component } from 'react';
import Cv from '../Cv';
import Button from "../Button";

class Preview extends Component {
  render() {
    return (
      <div className="preview__wrapper">
        {/* Button
        CV */}
        <Cv />
        Hola
        <Button buttonType="button" styles="preview__print-btn">
          Imprimir
        </Button>
      </div>
    );
  }
}

export default Preview;
