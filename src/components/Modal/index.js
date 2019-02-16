import React from "react";
import ReactModal from 'react-modal';
import ExportCode from "../ExportCode";

class ModalHtml extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal : false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render(){
    const {cvRef, handleHTML} = this.props;
    return(
      <div>
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal
          appElement={document.getElementById('App')}
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >

          <button onClick={this.handleCloseModal}>Close Modal</button>
          <ExportCode cvRef={cvRef} handleHTML={handleHTML}/>
        </ReactModal>
      </div>
    );
  }

};

export default ModalHtml;
