
    import * as React   from 'react';
    import * as ReactDOM from 'react-dom';
    import * as clicker  from "../clicker";

    /*******************************************************************************************************************
    *   The main class represents the application's entry point.
    *
    *   TODO ASAP   Alter the value of the clicked field!
    *   TODO ASAP   Ditch missing key warning
    *
    *   TODO WEAK   Complete the new game engine.
    *   TODO WEAK   Enumeration for all field states.
    *   TODO WEAK   Add game state ( won, etc. ) to ClickerAppState
    *   TODO WEAK   show state, score etc. in ClickerApp::render()
    *   TODO WEAK   learn "High-order component"!
    *   TODO ASAP   Create button and input fields to re-create the gamefield.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class Clicker
    {
        /***************************************************************************************************************
        *   Logs the given message to the console.
        ***************************************************************************************************************/
        public static main() : void
        {
            Clicker.acclaimAndSetTitle();
            Clicker.addClickerApp();
        }

        /***************************************************************************************************************
        *   Acclaims the debug console and sets the document title.
        ***************************************************************************************************************/
        private static acclaimAndSetTitle() : void
        {
            document.title = clicker.ClickerSettings.APPLICATION_TITLE;
            clicker.ClickerDebug.log( clicker.ClickerSettings.APPLICATION_TITLE );
        }

        /***************************************************************************************************************
        *   Adds the ClickerApp component to the DOM.
        ***************************************************************************************************************/
        private static addClickerApp() : void
        {
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
        }
    }
