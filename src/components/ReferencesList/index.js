import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReferencesList extends Component {
  render() {
    const {references} = this.props;
    return (
      <div className="reference-list__wrapper">
      <h4 className="reference-list__title">
        References
        </h4>
        <ul className="reference-list__list">
          {references.map((item, index)=>{
            return (

              <li className="reference-list__item" key={index}>
                <div className="reference-list__name">{item.name}</div>
                  <div className="reference-list__role">{item.role}</div>
                  <a className="reference-list__contact" href="mailto:{item.contact}">{item.contact}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

ReferencesList.propTypes = {
  references: PropTypes.array.isRequired
};

export default ReferencesList;
