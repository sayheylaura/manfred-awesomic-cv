import React, { Component } from "react";
import Button from "../Button";
import PropTypes from "prop-types";

class FormImage extends Component {
  constructor(props) {
    super(props);
    this.fr = new FileReader();
    this.myFileField = React.createRef();
    this.handleFilePicker = this.handleFilePicker.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  handleFilePicker() {
    this.myFileField.current.click();
  }

  uploadImage(e) {
    const myFile = e.currentTarget.files[0];
    this.fr.addEventListener("load", this.getImage);
    this.fr.readAsDataURL(myFile);
  }

  getImage() {
    const image = this.fr.result;
    this.props.handleAddImage(image);
  }

  render() {
    const { image } = this.props;
    return (
      <div className="get-avatar">
        <p className="get-avatar__description" />
        <div
          className="get-avatar__preview"
          style={{ backgroundImage: `url(${image})` }}
        />

        <Button
          buttonType="button"
          styles="get-avatar__trigger"
          handleButtonClick={this.handleFilePicker}
        >
          Upload new image
        </Button>

        <input
          type="file"
          ref={this.myFileField}
          className="get-avatar__upload-field"
          onChange={this.uploadImage}
        />

        <Button
          buttonType="button"
          styles="remove-btn"
          handleButtonClick={this.props.handleRemoveImage}
        >
          Remove image
        </Button>
      </div>
    );
  }
}

FormImage.propTypes = {
  image: PropTypes.string.isRequired,
  handleRemoveImage: PropTypes.func.isRequired
};

export default FormImage;
