
    import * as React    from 'react';
    import * as ReactDOM from 'react-dom';
    import * as clicker  from "./de/mayflower/clicker/clicker";

    /*******************************************************************************************************************
    *   Being invoked when all components of the HTML page is fully loaded.
    *******************************************************************************************************************/
    window.onload = function()
    {
        // acclaim and set title
        document.title = clicker.ClickerSettings.APPLICATION_TITLE;
        clicker.ClickerDebug.log( clicker.ClickerSettings.APPLICATION_TITLE );

        // pick config values from settings file
        let playerName:string = clicker.ClickerSettings.DEFAULT_PLAYER_NAME;
        let fieldSizeX:number = clicker.ClickerSettings.DEFAULT_FIELD_SIZE_X;
        let fieldSizeY:number = clicker.ClickerSettings.DEFAULT_FIELD_SIZE_Y;

        // render the clicker app
        ReactDOM.render(
            <clicker.ClickerApp
                playerName={ playerName }
                fieldSizeX={ fieldSizeX }
                fieldSizeY={ fieldSizeY }
            />,
            document.getElementById('gameContainer')
        );
    };
