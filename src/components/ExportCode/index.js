import React, { Component, Fragment } from 'react';
// import PropTypes from "prop-types";
import Prism from 'prismjs';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './prism.css';

class ExportCode extends Component {
  constructor(props){
    super(props);
    this.state = {
      refReady: false,
      copied: false
    }

    this.setRefAsReady = this.setRefAsReady.bind(this)
    setTimeout(this.setRefAsReady, 1000);
  }

  componentDidMount() {
    Prism.highlightAll();
  }
  setRefAsReady() {
    if(this.props.cvRef.current) {
      this.setState({refReady: true})
    }
  }

  onCopy = () => {
    this.setState({copied: true});
  };

  process(str) {
    let div = document.createElement("div");
    div.innerHTML = str.trim();
    return this.format(div, 0).innerHTML;
  }

  format(node, level) {
    let indentBefore = new Array(level++ + 1).join("  "),
      indentAfter = new Array(level - 1).join("  "),
      textNode;

    for (let i = 0; i < node.children.length; i++) {
      textNode = document.createTextNode("\n" + indentBefore);
      node.insertBefore(textNode, node.children[i]);
      this.format(node.children[i], level);

      if (node.lastElementChild === node.children[i]) {
        textNode = document.createTextNode("\n" + indentAfter);
        node.appendChild(textNode);
      }
    }
    return node;
  }


  render() {
    const {cvRef, codeToExport} = this.props;
    let pageHTML;
    if(cvRef.current) {
      const test = cvRef.current;
      pageHTML = this.process(test.outerHTML);
    }

    return (
      <Fragment>
      <div className="modal__outer ">
      <div className="clipboard__wrapper">
          <CopyToClipboard onCopy={this.onCopy} text={`${codeToExport}${pageHTML}`}>
            <button className="clipboard-btn">Copy to clipboard</button>
          </CopyToClipboard>
      </div>
      <pre><code className="language-markup">{`${codeToExport}${pageHTML}`}</code></pre>
      <div className="clipboard__wrapper">
          <CopyToClipboard onCopy={this.onCopy} text={`${codeToExport}${pageHTML}`}>
            <button className="clipboard-btn">Copy to clipboard</button>
          </CopyToClipboard>
      </div>
      </div>

      </Fragment>
    );
  }
}


// ExportCode.propTypes = {
//   cvRef: PropTypes.object.isRequired
// };
export default ExportCode;
