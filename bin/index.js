"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var rp = require("./rp");
/*******************************************************************************************************************
*   Being invoked when all components of the HTML page is fully loaded.
*******************************************************************************************************************/
window.onload = function () {
    // render the HELLO REACT example
    ReactDOM.render(React.createElement(rp.Hello, { compiler: "the TypeScript Compiler", framework: "the React Framework" }), document.getElementById("example1"));
    // render the TIC TAC TOE example
    ReactDOM.render(React.createElement(rp.Game, null), document.getElementById('example2'));
};
//# sourceMappingURL=index.js.map