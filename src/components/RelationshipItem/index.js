import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RelationshipItem extends Component {
  render() {
    const { name, comment, role, contact, company } = this.props.relation;
    return (
      <li className="sig-relations__item">
        <p className="sig-relations__name-comment">{`${name}, ${comment}`}</p>
        <p className="sig-relations__role">{role}</p>
        <p className="sig-relations__contact-company">

          {{ contact } && <span>
            <a href={`mailto: ${contact}`}>
              {contact}
            </a>
          </span>}

          {{ company } && <span>
            {company}
          </span>}

        </p>
      </li>
    );
  }
}

RelationshipItem.propTypes = {
  relation: PropTypes.object.isRequired
};
export default RelationshipItem;
