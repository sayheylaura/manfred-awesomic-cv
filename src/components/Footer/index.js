import React, { Component } from "react";
import logo from "../../images/logo.svg";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <a href="https://www.getmanfred.com" className="footer__manfred-logo">
            <div
              className="logo"
              style={{ backgroundImage: `url(${logo})` }}
            />
          </a>
          <div className="footer__text">
            <span>Made with</span><span className="footer__heart"></span><span>in</span><a href="https://adalab.es" className="footer__adalab">Adalab</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
