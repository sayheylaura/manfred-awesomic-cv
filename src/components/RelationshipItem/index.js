import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RelationshipItem extends Component {
  render() {
    const { name,
      comment,
      role,
      contact,
      company
    } = this.props.relation;
    return (
      <li className="sig-relations__item">
        <p className="sig-relations__name">{`${name}`}</p>
        <p className="sig-relations__comment">{`${comment}`}</p>
        <span className="sig-relations__role">{role}</span>
        {({ company }) && <span className="sig-relations__company">
            ({company})
          </span>}
        <div className="sig-relations__contact-company">

          {{ contact } && <div>
            <a className="link"href={`mailto: ${contact}`}>
              {contact}
            </a>
          </div>}

        </div>
      </li>
    );
  }
}

RelationshipItem.propTypes = {
  relation: PropTypes.object.isRequired
};
export default RelationshipItem;
