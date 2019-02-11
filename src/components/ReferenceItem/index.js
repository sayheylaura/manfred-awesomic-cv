import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReferenceItem extends Component {
  render() {
    const {name, role, contact} = this.props.sampleReferenceItem;
    return (
      <li className="reference-list__item">
        <span className="reference-list__name">{name}</span>
        <span className="reference-list__role">&#160;({role})</span>
        <a className="reference-list__contact link" href={`mailto: ${contact}`}>{contact}</a>
      </li>
    );
  }
}

ReferenceItem.propTypes = {
  sampleReferenceItem: PropTypes.object.isRequired
};

export default ReferenceItem;
