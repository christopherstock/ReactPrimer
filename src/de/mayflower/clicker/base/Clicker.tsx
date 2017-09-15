
    import * as React    from 'react';
    import * as ReactDOM from 'react-dom';
    import * as clicker  from "../clicker";

    /*******************************************************************************************************************
    *   The main class represents the application's entry point.
    *
    *   TODO ASAP   Complete the new game engine.
    *
    *   TODO ASAP   Check react .styl files!
    *   TODO HIGH   Add game state ( won, etc. ) to ClickerAppState according to new game engine.
    *   TODO HIGH   show state, score etc. in ClickerApp::render() according to new game engine.
    *   TODO INIT   Create button and input fields for recreating the gamefield according to new game engine..
    *   TODO INIT   Styling (bg image, fg translucent blocks) .. joy!
    *   TODO LOW    Add animations and learn react callbacks etc.
    *   TODO LOW    learn 'React high-order component'
    *   TODO WEAK   learn 'React delegates'
    *   TODO WEAK   learn 'React promises'
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class Clicker
    {
        // TODO This sounds like a technical debt ..
        public      static      currentCellIndex        :number                             = 0;

        /***************************************************************************************************************
        *   Logs the given message to the console.
        ***************************************************************************************************************/
        public static main() : void
        {
            Clicker.acclaimAndSetTitle();
            Clicker.deployClickerApp();
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
        private static deployClickerApp() : void
        {
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
