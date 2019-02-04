import React, { Component } from "react";
import PropTypes from "prop-types";

class LanguageItem extends Component {
  render() {
    const { language, proficiency } = this.props.sampleLanguageItem;
    return (
      <li className="languages__list-item">
        <h4 className="languages__item-language">{language}</h4>
        <p className="languages__item-level">{proficiency}</p>
      </li>
    );
  }
}

LanguageItem.propTypes = {
  sampleLanguageItem: PropTypes.object.isRequired
};

export default LanguageItem;
