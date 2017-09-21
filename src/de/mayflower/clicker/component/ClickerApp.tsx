
    import * as React   from 'react';
    import * as clicker from '../clicker';

    /*******************************************************************************************************************
    *   Represents the 'clicker' game.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ClickerApp extends React.Component<clicker.ClickerAppProps, clicker.ClickerAppState>
    {
        /***************************************************************************************************************
        *   Renders the 'clicker' main game component.
        *
        *   @return The rendered React element.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            let clickerBoard:JSX.Element = <clicker.ClickerBoard
                boardSizeX={     this.props.boardSizeX     }
                boardSizeY={     this.props.boardSizeY     }
                numberOfColors={ this.props.numberOfColors }
            />;
            let clickerInfo:JSX.Element = <clicker.ClickerInfo
                acclaim={ "Welcome to the ReactPrimer" }
            />;

            return <div className="gameContainer">
                { clickerBoard }
                { clickerInfo  }
            </div>;
        }
    }
