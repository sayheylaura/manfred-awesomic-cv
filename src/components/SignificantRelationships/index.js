import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RelationshipItem from '../RelationshipItem';

class SignificantRelationships extends Component {
  render() {
    const {sampleSigRelations} = this.props;
    return (
      <div className="sig-relations__wrapper">
        <h3 className="sig-relations__title">
            Significant Relationships
        </h3>
        <ul className="sig-relations__list">
          {sampleSigRelations.map((item, index)=>{
            return (
              <RelationshipItem key={index} relation={item} />

            );
          })}
        </ul>
      </div>

    );
  }
}

SignificantRelationships.propTypes = {
  sampleSigRelations: PropTypes.array.isRequired
};
export default SignificantRelationships;
