
    import * as React from 'react';
    import * as ReactDOM from 'react-dom';

    import { Hello } from "./components/Hello";

    /***********************************************************************************************************************
    *   Being invoked when all components of the HTML page is fully loaded.
    ***********************************************************************************************************************/
    window.onload = function()
    {
        ReactDOM.render(
            <Hello compiler="the TypeScript Compiler" framework="the React Framework" />,
            document.getElementById("example")
        );
    };
