import React, { Component } from "react";
import logo from "../../images/logo.svg";
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <a href="https://www.getmanfred.com">
            <div
              className="logo"
              style={{ backgroundImage: `url(${logo})` }}
            />
          </a>

        </div>
      </footer>
    );
  }
}

export default Footer;
