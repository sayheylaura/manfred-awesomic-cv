import React from "react";
import PropTypes from "prop-types";

const Intro = ({sampleIntro}) => {
  return (
    <div className="intro__wrapper">
      <p className="intro__paragraph">{sampleIntro}</p>
    </div>
  );
};

Intro.propTypes = {
  sampleIntro: PropTypes.string.isRequired,
};

export default Intro;
