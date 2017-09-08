
    import * as React    from 'react';
    import * as ReactDOM from 'react-dom';
    import * as rp       from "./rp";

    import { Game } from "./components/TicTacToe";

    /*******************************************************************************************************************
    *   Being invoked when all components of the HTML page is fully loaded.
    *******************************************************************************************************************/
    window.onload = function()
    {
/*
        // render the HELLO REACT example
        ReactDOM.render
        (
            <rp.Hello compiler="the TypeScript Compiler" framework="the React Framework" />,
            document.getElementById("example")
        );
*/
        // render the TIC TAC TOE example
        ReactDOM.render(
            <Game />,
            document.getElementById('example')
        );

    };
