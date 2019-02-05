import React from "react";
import PropTypes from "prop-types";

const Intro = ({ sampleIntro }) => {
  return (
    <div className="intro__wrapper wrapper">
      <h3 className="intro__title title">Intro</h3>
      <p className="intro__paragraph paragraph">{sampleIntro}</p>
    </div>
  );
};

Intro.propTypes = {
  sampleIntro: PropTypes.string.isRequired
};

export default Intro;
