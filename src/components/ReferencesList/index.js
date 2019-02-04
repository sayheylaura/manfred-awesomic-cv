import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReferencesList extends Component {
  render() {
    const {references} = this.props;
    return (
      <div className="reference-list__wrapper">
        <ul className="reference-list__list">
          <h4>References</h4>
          {references.map((item, index)=>{
            return (
              <li className="reference-list__item" key={index}>
                <p className="reference-list__paragraph">
                  {item.name}{', '}
                  <span>
                    <a href={item.contact}>
                      {item.role}
                      </a>
                  </span>

                </p>
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
