import React, { Component } from 'react';
class ExportCode extends Component {
  constructor(props){
    super(props);
    this.state = {
      refReady: false
    }

    this.setRefAsReady = this.setRefAsReady.bind(this)
    setTimeout(this.setRefAsReady, 1000);
  }

  setRefAsReady() {
    if(this.props.cvRef.current) {
      this.setState({refReady: true})
    }
  }

  render() {
    const {cvRef} = this.props;
    console.log(cvRef.current, "cvref export");
    let pageHTML;
    if(cvRef.current) {
      const test = cvRef.current
      pageHTML = test.outerHTML;
    }
    return (
      <div>
      <pre className="pre">{pageHTML}</pre>
      </div>
    );
  }
}

export default ExportCode;
