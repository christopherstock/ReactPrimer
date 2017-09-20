
    import * as React    from 'react';
    import * as ReactDOM from 'react-dom';
    import * as clicker  from "../clicker";

    /*******************************************************************************************************************
    *   The main class represents the application's entry point.
    *
    *   TODO ASAP   Alter the message in the ClickerInfo component.
    *   TODO ASAP   Particle effects and css animations!
    *   TODO ASAP   Check react .styl files!
    *   TODO HIGH   Add debug system.
    *   TODO HIGH   Show "Cleared all cells!"
    *   TODO HIGH   Show "Sorry - no moves left!"
    *
    *   TODO HIGH   Add game state ( won, etc. ) to ClickerAppState according to new game engine.
    *   TODO HIGH   show state, score etc. in ClickerApp::render() according to new game engine.
    *   TODO INIT   Styling (bg image, fg translucent blocks)
    *   TODO LOW    Add animations and learn react callbacks etc.
    *   TODO LOW    Create button and input fields for recreating the gamefield with own parameters.
    *
    *   TODO WEAK   Learn 'React high-order component'
    *   TODO WEAK   Learn 'React delegates'
    *   TODO WEAK   Learn 'React promises'
    *   TODO WEAK   Send to 'daniel.maul@web.de'
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
            let boardSizeX:number     = clicker.ClickerSettings.DEFAULT_BOARD_SIZE_X;
            let boardSizeY:number     = clicker.ClickerSettings.DEFAULT_BOARD_SIZE_Y;

            // render the clicker app
            ReactDOM.render(
                <clicker.ClickerApp
                    boardSizeX={     boardSizeX     }
                    boardSizeY={     boardSizeY     }
                    numberOfColors={ numberOfColors }
                />,
                document.getElementById('mainContainer')
            );
        }
    }
