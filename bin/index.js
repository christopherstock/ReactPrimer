"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var TicTacToe_1 = require("./components/TicTacToe");
/*******************************************************************************************************************
*   Being invoked when all components of the HTML page is fully loaded.
*******************************************************************************************************************/
window.onload = function () {
    /*
            // render the HELLO REACT example
            ReactDOM.render
            (
                <rp.Hello compiler="the TypeScript Compiler" framework="the React Framework" />,
                document.getElementById("example")
            );
    */
    // render the TIC TAC TOE example
    ReactDOM.render(React.createElement(TicTacToe_1.Game, null), document.getElementById('example'));
};
//# sourceMappingURL=index.js.map