"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var helloComponent = require("./components/Hello");
/*******************************************************************************************************************
*   Being invoked when all components of the HTML page is fully loaded.
*******************************************************************************************************************/
window.onload = function () {
    ReactDOM.render(React.createElement(helloComponent.Hello, { compiler: "the TypeScript Compiler", framework: "the React Framework" }), document.getElementById("example"));
};
//# sourceMappingURL=index.js.map