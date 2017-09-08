"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var Hello_1 = require("./components/Hello");
window.onload = function () {
    ReactDOM.render(React.createElement(Hello_1.Hello, { compiler: "the TypeScript Compiler", framework: "the React Framework" }), document.getElementById("example"));
};
//# sourceMappingURL=index.js.map