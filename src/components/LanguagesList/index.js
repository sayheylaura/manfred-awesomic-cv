import React, { Component } from "react";
import PropTypes from "prop-types";

class LanguagesList extends Component {
  render() {
    const { sampleLanguages } = this.props;
    return (
      <div className="languages__wrapper">
        <h3>Languages</h3>
        <ul className="languages__list">
          {sampleLanguages.map((item, index) => {
            return (
              <li key={index} className="languages__list-item">
                <h4 className="languages__item">{item.language}</h4>
                <p className="languages__item-level">{item.proficiency}</p>
              </li>
            );
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
