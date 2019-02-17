import React, { Component } from "react";
import PropTypes from "prop-types";
import FormCompany from "../FormCompany";

class FormExperienceItem extends Component {
  render() {
    const {
      item,
      handleRemoveExperienceItem,
      handleExperienceChange
    } = this.props;

    const { company } = item;
    return (
      <div>
        {company.map((item, index) => {
          return (
            <FormCompany
              key={index}
              ind={index}
              name={item.name}
              handleRemoveExperienceItem={handleRemoveExperienceItem}
              handleExperienceChange={handleExperienceChange}
            />
          );
        })}
      </div>
    );
  }
}

FormExperienceItem.propTypes = {
  ind: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  handleRemoveExperienceItem: PropTypes.func.isRequired,
  handleExperienceChange: PropTypes.func.isRequired
};

export default FormExperienceItem;
