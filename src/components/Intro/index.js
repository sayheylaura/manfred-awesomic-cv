import React from "react";
import PropTypes from "prop-types";

const Intro = ({sampleIntro}) => {
  return (
    <div className="intro__wrapper">
    <h3 className="intro__wrapper">
      INTRO
    </h3>
      <p className="intro__paragraph">{sampleIntro}</p>
    </div>
  );
};

Intro.propTypes = {
  sampleIntro: PropTypes.string.isRequired,
};

export default Intro;
