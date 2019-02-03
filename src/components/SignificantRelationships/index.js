import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
              <li className="sig-relations__item" key={index}>
                {/* <SignificantRelationshipItem key={index} relation={item} /> TBD*/}
                <p className="sig-relations__name-comment">{item.name}, {item.comment}</p>
                <p className="sig-relations__role">{item.role}</p>
                <p className="sig-relations__contact-company">{item.contact}, {item.company}</p>
              </li>
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
