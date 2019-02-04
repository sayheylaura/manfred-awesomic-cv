import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReferenceItem from '../ReferenceItem';

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
              <ReferenceItem key={index} sampleReferenceItem={item}/>
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
