import React, { Component } from 'react';
class ExportCode extends Component {
  constructor(props){
    super(props);
    this.state = {
      refReady: false
    }
    // this.cvRef = React.createRef();
    // this.handleHTML = this.handleHTML.bind(this);
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
      // console.log(this.cvRef.current.outerHTML);
      const test = cvRef.current
      // pageHTML = JSON.stringify(test.outerHTML);
      pageHTML = test.outerHTML;
    }
    return (
      <div>
        {/* <button onClick={handleHTML}>Fucking Btn</button> */}

      <pre className="pre">{pageHTML}</pre>
      </div>
    );
  }
}

export default ExportCode;
