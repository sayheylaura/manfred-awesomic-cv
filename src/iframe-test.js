const pageHTML = document.documentElement.innerHTML;

const tempEl = document.createElement('a');

tempEl.href = 'data:attachment/text,' + encodeURI(pageHTML);
tempEl.target = '_blank';
tempEl.download = 'thispage.html';
tempEl.click();
///
// const pageHTML = document.documentElement.innerHTML;
//desde aqui chuta //
const pageHTML = document.querySelector('.cv__wrapper').outerHTML;
console.log(pageHTML);
let newHTMLDocument = document.implementation.createHTMLDocument();
newHTMLDocument.body.innerHTML = pageHTML;

//meter head tralla
pageHead = '<title>My CV</title>';
myStringOfstyles = 'https://github.com/Adalab/easley-s4-manfred/blob/dev/src/App.scss';
var linkElement = this.document.createElement('link');
linkElement.setAttribute('rel', 'stylesheet');
linkElement.setAttribute('type', 'text/css');
// linkElement.setAttribute('href', 'data:text/css;charset=UTF-8,' + encodeURIComponent(myStringOfstyles));
linkElement.setAttribute('href', 'https://github.com/Adalab/easley-s4-manfred/blob/dev/src/App.scss');
// linkElement.href ='https://github.com/Adalab/easley-s4-manfred/blob/dev/src/App.scss';

newHTMLDocument.head.innerHTML = linkElement + pageHead;

//fin head tralla


console.log(newHTMLDocument);


//intento 2
//desde aqui chuta //
const pageHTML = document.querySelector('.cv__wrapper').outerHTML;
console.log(pageHTML);
let newHTMLDocument = document.implementation.createHTMLDocument();
newHTMLDocument.body.innerHTML = pageHTML;

//meter head tralla
pageHead = '<title>My CV</title>';
const linkElement = this.document.createElement('link');
linkElement.rel  = 'stylesheet';
linkElement.type = "text/css";
linkElement.href = 'https://raw.githack.com/Adalab/easley-s4-manfred/dev/src/App.scss';


// newHTMLDocument.head.innerHTML = linkElement + pageHead;
newHTMLDocument.head.innerHTML += '<link rel="stylesheet" href="styles.css" type="text/css"/>';


//fin head tralla


console.log(newHTMLDocument.head);
//fin 2


const tempEl = document.createElement('a');

tempEl.href = 'data:html,' + encodeURI(pageHTML);
console.log(tempEl.href);
tempEl.target = '_blank';
tempEl.download = 'thispage.html';
tempEl.click();



function makeDocument() {
  let newHTMLDocument = document.implementation.createHTMLDocument();
  const pageHTML = document.querySelector('.cv__wrapper').innerHTML;
  const page = newHTMLDocument.body.appendChild(pageHTML);

    console.log(page);
  }

  // Copy the new HTML document into the frame

  var destDocument = frame.contentDocument;
  var srcNode = doc.documentElement;
  var newNode = destDocument.importNode(srcNode, true);

  destDocument.replaceChild(newNode, destDocument.documentElement);
}
