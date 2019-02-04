import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReferenceItem extends Component {
  render() {
    const {name, role, contact} = this.props.sampleReferenceItem;
    return (
      <li className="reference-list__item">
        <div className="reference-list__name">{name}</div>
          <div className="reference-list__role">{role}</div>
          <a className="reference-list__contact" href="mailto:{contact}">{contact}</a>
      </li>
    );
  }
}

ReferenceItem.propTypes = {
  sampleReferenceItem: PropTypes.object.isRequired
};

export default ReferenceItem;
