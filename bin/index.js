"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var rp = require("./rp");
/*******************************************************************************************************************
*   Being invoked when all components of the HTML page is fully loaded.
*******************************************************************************************************************/
window.onload = function () {
    // render the React DOM
    ReactDOM.render(React.createElement(rp.Hello, { compiler: "the TypeScript Compiler", framework: "the React Framework" }), document.getElementById("example"));
};
//# sourceMappingURL=index.js.map