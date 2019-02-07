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
      <div className="links">
          <Link to={`/form`} className="link">Form</Link>
          <Link to={`/json`} className="link">Json</Link>
          <Link to={`/preview`} className="link">Cv</Link>
        </div>
      <main className="main">
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
