import React, { Component, Fragment } from 'react';
import Prism from 'prismjs';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './prism.css';

class ExportCode extends Component {
  constructor(props){
    super(props);
    this.state = {
      // refReady: false,
      copied: false
    }

    // this.setRefAsReady = this.setRefAsReady.bind(this)
    // setTimeout(this.setRefAsReady, 1000);
  }

  componentDidMount() {
    Prism.highlightAll();
  }
  // setRefAsReady() {
  //   if(this.props.cvRef.current) {
  //     this.setState({refReady: true})
  //   }
  // }

  onCopy = () => {
    this.setState({copied: true});
  };

  // process(str) {
  //   let div = document.createElement("div");
  //   div.innerHTML = str.trim();
  //   return this.format(div, 0).innerHTML;
  // }

  // format(node, level) {
  //   let indentBefore = new Array(level++ + 1).join("  "),
  //     indentAfter = new Array(level - 1).join("  "),
  //     textNode;

  //   for (let i = 0; i < node.children.length; i++) {
  //     textNode = document.createTextNode("\n" + indentBefore);
  //     node.insertBefore(textNode, node.children[i]);
  //     this.format(node.children[i], level);

  //     if (node.lastElementChild === node.children[i]) {
  //       textNode = document.createTextNode("\n" + indentAfter);
  //       node.appendChild(textNode);
  //     }
  //   }
  //   return node;
  // }


  render() {
    // const {cvRef} = this.props;
    const embed = '<iframe src="https://beta.adalab.es/easley-s4-manfred/#/embedded" height="500" width="90%"></iframe>';
    // let pageHTML;
    // if(cvRef.current) {
    //   const test = cvRef.current;
    //   pageHTML = this.process(test.outerHTML);
    // }

    return (
      <Fragment>
      <div className="modal__outer">
      {/* <pre><code className="language-markup">{pageHTML}</code></pre> */}
      <pre><code className="language-markup">{embed}</code></pre>
      <div className="clipboard__wrapper">
          <CopyToClipboard onCopy={this.onCopy} text={embed}>
            <button className="clipboard-btn">Copy to clipboard</button>
          </CopyToClipboard>
      </div>
      <div className="iframe__title">
        <h5> Preview </h5>
      </div>
      <div className="iframe__preview">
        <iframe className="iframe__link" title="cv" src="http://localhost:3001/#/embedded" height="500" width="90%"></iframe>
      </div>
      </div>

      </Fragment>
    );
  }
}

export default ExportCode;
