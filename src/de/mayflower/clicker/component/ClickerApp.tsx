
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
        public          static      test        :clicker.ClickerInfo                = null;

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

            // TODO ASK better way to reference JSX.Element?
            let clickerInfoComponent:clicker.ClickerInfo = new clicker.ClickerInfo
            (
                {
                    acclaim: "Enjoy your game!",
                }
            );
            let clickerInfoJSX:JSX.Element = clickerInfoComponent.render();



            ClickerApp.test = clickerInfoComponent;



            return <div className="gameContainer">
                { clickerBoard   }
                { clickerInfoJSX }
            </div>;
        }
    }
