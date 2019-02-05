import React, { Component } from "react";
import logo from "../../images/logo.svg";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__container">
          <a href="https://www.getmanfred.com">
            <div
              className="logo"
              style={{ backgroundImage: `url(${logo})` }}
            />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
