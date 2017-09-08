"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
/*******************************************************************************************************************
*   This components renders a H1 that contains a HELLO REACT string.
*
*   The properties are set with the interface HelloProps.
*   State is never set so we use the 'undefined' type.
*
*   @author  Christopher Stock
*   @version 1.0
*******************************************************************************************************************/
var Hello = /** @class */ (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /***************************************************************************************************************
    *   Renders this component.
    *
    *   @return The rendered React element.
    ***************************************************************************************************************/
    Hello.prototype.render = function () {
        return React.createElement("h1", null,
            "Hello from ",
            this.props.compiler,
            React.createElement("br", null),
            "and from the ",
            this.props.framework,
            "!");
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;
//# sourceMappingURL=Hello.js.map