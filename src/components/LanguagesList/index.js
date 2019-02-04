import React, { Component } from "react";
import PropTypes from "prop-types";
import LanguageItem from "../LanguageItem";

class LanguagesList extends Component {
  render() {
    const { sampleLanguages } = this.props;
    return (
      <div className="languages__wrapper">
        <h3 className="languages__title">Languages</h3>
        <ul className="languages__list">
          {sampleLanguages.map((item, index) => {
            return <LanguageItem key={index} sampleLanguageItem={item} />;
          })}
        </ul>
      </div>
    );
  }
}

LanguagesList.propTypes = {
  sampleLanguages: PropTypes.array.isRequired
};

export default LanguagesList;
