import React, { Component, Fragment } from "react";
import { Route, Switch, Link } from "react-router-dom";

import PropTypes from "prop-types";
import Preview from "../Preview";
import Form from "../Form";
import Json from "../Json";

class Main extends Component {
  render() {
    const { sample, handlePrintBtn, handleJsonText } = this.props;
    return (
      <Fragment>

      <main className="main">
      <nav className="links">
        <ul>
          <Link to="/form" className=""><li className="nav-link">Form</li></Link>
          <Link to="/json" className=""><li className="nav-link">Json</li></Link>
          <Link to="/preview" className=""><li className="nav-link">Cv</li></Link>
        </ul>
      </nav>
        <Switch>
          <Route path="/form" render={()=><Form />}/>
          <Route path="/json" render={()=><Json sample={sample} handleJsonText={handleJsonText} />}/>
          <Route path="/preview" render={()=><Preview sample={sample} handlePrintBtn={handlePrintBtn} />}/>
        </Switch>
      </main>
      </Fragment>
    );
  }
}

Main.propTypes = {
  sample: PropTypes.object.isRequired,
  handlePrintBtn: PropTypes.func.isRequired,
  handleJsonText: PropTypes.func.isRequired
};

export default Main;
