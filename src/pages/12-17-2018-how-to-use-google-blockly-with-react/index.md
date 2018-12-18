---
path: "/how-to-use-google-blockly-with-react"
date: "2018-12-17"
title: "How to Use Google Blockly with React.js"
---

Google Blockly is an amazing Javascript library built by Google to offer an intearactive build block enviorenment with visual programming editors. It is a great way to make an educational app and naturally, you would probably want to use it with React.js so we will cover that in this tutorial.

To use Blockly with React we would want to get <a href="https://www.npmjs.com/package/node-blockly" target="_blank">`node-blockly`</a>. Node Blockly would allow us to use our blockly code in JavaScript to use it with React.

Install Blockly: 
```npm i node-blockly```

Next in the file that you want to use Blockly in, import it. Also import the `javascript_compressed` file from the file like so:
```
import Blockly from 'node-blockly/browser'
import 'node-blockly/lib/javascript_compressed';
```

Great! Now that we have Blockly in our file we can load our toolbox. Our toolbox will load the xml for all of our blocks we will end up using in our app, and if you make custom blocks you can add them to the toolbox. You can learn more about the toolbox <a href="https://developers.google.com/blockly/guides/configure/web/toolbox" target="_blank">here</a>

```
const toolbox = `
        <xml>
           <block type="controls_if"></block>
           <block type="controls_whileUntil"></block>
         </xml
    `
```

Now we have the toolbox and we have Blockly imported we want to get started writing our component and since we want Blockly to be responsive, we need to writing a bit of code such as an `onresize` function.

First lets work on the constructor:
Lets bind a function `blockly` for use in our component

```
constructor(props) {
  super(props);
  this.blockly = this.blockly.bind(this);
}
```

Now lets work on our Blockly function

```
blockly() {
  var workspacePlayground = Blockly.inject(this.blocklyDiv, {toolbox: toolbox})
  window.addEventListener('resize', this.onresize, false);
  this.onresize();
  Blockly.svgResize(workspacePlayground);
}
```

Above in our blockly function we add an event listener to see if the user resizes their screen to update the dimensions of blockly. We then call `onresize()` let's write that function.

```
onresize = (e) => {
  var element = this.editor;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  // Position blocklyDiv over blocklyArea.
  this.blocklyDiv.style.left = x + 'px';
  this.blocklyDiv.style.top = y + 'px';
  this.blocklyDiv.style.width = this.editor.offsetWidth + 'px';
  this.blocklyDiv.style.height = this.editor.offsetHeight + 'px';
}
```
(As we are using an arrow function there is no need to bind `this` function as `this` is in the scope outside of the function)

Now that we have the resizing functions down we can render Blockly: 
```
render() { 
  return (
    <div>
      <div id="editor" className="editortop" ref={ref => {this.editor = ref}} style={{width: '100%'}}>
        <div id="blocklyDiv" className="blocky-div" ref={ref => {this.blocklyDiv = ref}} style={{position: 'absolute'}}></div>
      </div>
    </div>
  );
}
```
Now that we have the basic functionality down, we can write things such as a save function, load function, and a code function to get the JavaScript code behind the Blockly element:

```
save = () => {
  // SAVE USER BLOCKS TO LOCALSTORAGE
  var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  localStorage.setItem('workspace', Blockly.Xml.domToText(xml));
  Blockly.mainWorkspace.clear();
}

load = () => {
  // LOAD USER DATA FROM SAVE FUNCTION (SAVE USER BLOCKS TO LOCALSTORAGE)
  console.log(Blockly.mainWorkspace);
  var xml = Blockly.Xml.textToDom(localStorage.getItem('workspace'));
  Blockly.Xml.domToWorkspace(xml, Blockly.mainWorkspace); 
}

run = () => {
  // RUN CODE RETURNED FROM BLOCKLY ELEMENT
  var code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
  console.log(code);
}
```

#### In the end here is how your code can look like
This example contains functions to save, load, and run the users code 

*src/app.js*

```
import React, { Component } from 'react';
import Blockly from 'node-blockly/browser'
import '../customblocks.js'

const toolbox = `
        <xml>
           <block type="controls_if"></block>
           <block type="controls_whileUntil"></block>
         </xml
    `

class App extends Component {
  constructor(props) {
    super(props);
    this.blockly = this.blockly.bind(this);
  }

  onresize = (e) => {
    var element = this.editor;
    var x = 0;
    var y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    this.blocklyDiv.style.left = x + 'px';
    this.blocklyDiv.style.top = y + 'px';
    this.blocklyDiv.style.width = this.editor.offsetWidth + 'px';
    this.blocklyDiv.style.height = this.editor.offsetHeight + 'px';
  }

  blockly() {
    var workspacePlayground = Blockly.inject(this.blocklyDiv, {toolbox: toolbox})
    window.addEventListener('resize', this.onresize, false);
    this.onresize();
    Blockly.svgResize(workspacePlayground);
  }

  componentDidUpdate() {
    window.removeEventListener('resize', this.blockly, false)
  } 

  save = () => {
    var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    localStorage.setItem('workspace', Blockly.Xml.domToText(xml));
    Blockly.mainWorkspace.clear();
  }

  load = () => {
    console.log(Blockly.mainWorkspace);
    var xml = Blockly.Xml.textToDom(localStorage.getItem('workspace'));
    Blockly.Xml.domToWorkspace(xml, Blockly.mainWorkspace); 
  }

  run = () => {
    // work on run function
    var code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
    console.log(code);
  }

  render() { 
    return (
      <div>
        <div id="editor" className="editortop" ref={ref => {this.editor = ref}} style={{width: '100%'}}>
          <div id="blocklyDiv" className="blocky-div" ref={ref => {this.blocklyDiv = ref}} style={{position: 'absolute'}}></div>
        </div>
        {/* Buttons to save, run, load the code  */}
        <button onClick={this.save}>Save Workspace</button>
        <button onClick={this.load}>Restore</button>
        <button onClick={this.run}>Run</button>
      </div>
    );
  }
}
 
export default App;
```

Now Blockly is pretty much added into our app. You can go further and add custom blocks to your application for Google Blockly to be suitable your individual needs and what is best for your application. 

Learn more about custom blocks and how to make them, return code behind them, and define read this article <a href="https://developers.google.com/blockly/guides/create-custom-blocks/overview" target="_blank">here</a>

You can create custom blocks <a href="https://blockly-demo.appspot.com/static/demos/blockfactory/index.html" target="_blank">here</a>

Learn more about the toolbox <a href="https://developers.google.com/blockly/guides/configure/web/toolbox" target="_blank">here</a>

Thanks for reading!