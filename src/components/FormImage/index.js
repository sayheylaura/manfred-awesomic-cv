import React, { Component } from "react";
// import PropTypes from "prop-types";


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
    this.fr.addEventListener('load', this.getImage);
    this.fr.readAsDataURL(myFile);
  }

  getImage() {
    const image = this.fr.result;
    this.props.updateAvatar(image);
  }

  render() {
    const { image } = this.props;
    return (
      <div className="get-avatar">
        <p className="get-avatar__description"></p>
        <div className="get-avatar__preview" style={{ backgroundImage: `url(${image})` }}></div>
        <button className="get-avatar__trigger" type="button" onClick={this.handleFilePicker}>Upload new image</button>
        <input type="file" ref={this.myFileField} className="get-avatar__upload-field" onChange={this.uploadImage} />
      </div>
    );
  }

}

export default FormImage;
