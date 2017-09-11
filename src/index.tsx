
    import * as React    from 'react';
    import * as ReactDOM from 'react-dom';
    import * as clicker  from "./de/mayflower/clicker/clicker";

    /*******************************************************************************************************************
    *   Being invoked when all components of the HTML page is fully loaded.
    *******************************************************************************************************************/
    window.onload = function()
    {
        let playerName:string = "Christopher";
        let fieldSizeX:number = 16;
        let fieldSizeY:number = 22;

        // render the CLICKER example
        ReactDOM.render(
            <clicker.ClickerApp
                playerName={ playerName }
                fieldSizeX={ fieldSizeX }
                fieldSizeY={ fieldSizeY }
            />,
            document.getElementById('gameContainer')
        );
    };
