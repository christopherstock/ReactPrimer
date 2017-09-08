
    import * as React    from 'react';
    import * as ReactDOM from 'react-dom';
    import * as rp       from "./rp";

    /*******************************************************************************************************************
    *   Being invoked when all components of the HTML page is fully loaded.
    *******************************************************************************************************************/
    window.onload = function()
    {
        // render the HELLO REACT example
        ReactDOM.render
        (
            <rp.Hello compiler="the TypeScript Compiler" framework="the React Framework" />,
            document.getElementById("example1")
        );

        // render the TIC TAC TOE example
        ReactDOM.render(
            <rp.Game />,
            document.getElementById('example2')
        );

        // render the CLICKER example
        ReactDOM.render(
            <rp.Main fieldSizeX="12" fieldSizeY="18" />,
            document.getElementById('example3')
        );
    };
