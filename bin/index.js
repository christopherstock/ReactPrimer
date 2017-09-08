"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var Hello_1 = require("./components/Hello");
/***********************************************************************************************************************
*   Being invoked when all components of the HTML page is fully loaded.
***********************************************************************************************************************/
window.onload = function () {
    ReactDOM.render(React.createElement(Hello_1.Hello, { compiler: "the TypeScript Compiler", framework: "the React Framework" }), document.getElementById("example"));
};
//# sourceMappingURL=index.js.map