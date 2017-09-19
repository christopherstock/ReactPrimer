
    import * as React    from 'react';
    import * as ReactDOM from 'react-dom';
    import * as clicker  from "../clicker";

    /*******************************************************************************************************************
    *   The main class represents the application's entry point.
    *
    *   TODO ASAP   Add property number of different colors.
    *   TODO HIGH   Cell instead of Field everywhere!
    *   TODO ASAP   Mark affected cells on hovering!
    *   TODO ASAP   Particle effects and css animations!
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
        // TODO This sounds like a technical debt .. could this be pruned?
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
            let numberOfColors:number = clicker.ClickerSettings.DEFAULT_NUMBER_OF_COLORS;
            let fieldSizeX:number     = clicker.ClickerSettings.DEFAULT_FIELD_SIZE_X;
            let fieldSizeY:number     = clicker.ClickerSettings.DEFAULT_FIELD_SIZE_Y;

            // render the clicker app
            ReactDOM.render(
                <clicker.ClickerApp
                    fieldSizeX={     fieldSizeX     }
                    fieldSizeY={     fieldSizeY     }
                    numberOfColors={ numberOfColors }
                />,
                document.getElementById('gameContainer')
            );
        }
    }
