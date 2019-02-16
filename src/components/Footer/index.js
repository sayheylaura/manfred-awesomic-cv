import React, { Component } from "react";
import logo from "../../images/logo.svg";
import ExportCode from "../../ExportCode";

class Footer extends Component {
  render() {
    const {cvDOM, handleHTML} = this.props;
    console.log("cvDOM en footer", cvDOM)
    return (
      <footer className="footer">
        <div className="footer__container">
          <a href="https://www.getmanfred.com">
            <div
              className="logo"
              style={{ backgroundImage: `url(${logo})` }}
            />
          </a>
          {/* <ExportCode handleHTML={handleHTML} cvDOM={cvDOM}/> */}
        </div>
      </footer>
    );
  }
}

export default Footer;
