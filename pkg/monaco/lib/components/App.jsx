"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../index.css");
var React = require("react");
var ReactDOM = require("react-dom");
var Editor_1 = require("./Editor");
var root = document.getElementById('root');
var el = (<React.StrictMode>
    <Editor_1.Editor />
  </React.StrictMode>);
ReactDOM.render(el, root);
//# sourceMappingURL=App.jsx.map