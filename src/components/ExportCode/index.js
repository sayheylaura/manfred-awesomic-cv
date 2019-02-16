import React, { Component } from 'react';
import Prism from 'prismjs';
import './prism.css';

class ExportCode extends Component {
  constructor(props){
    super(props);
    this.state = {
      refReady: false
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
    const {cvRef} = this.props;
    let pageHTML;
    if(cvRef.current) {
      const test = cvRef.current
      pageHTML = this.process(test.outerHTML);
    }
    return (
      <div className="highlight">
      <pre><code className="language-markup">{pageHTML}</code></pre>
      </div>
    );
  }
}

export default ExportCode;
