
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
            return <div className="mainContainer">
                <clicker.ClickerBoard
                    initialFieldSizeX={ this.props.fieldSizeX }
                    initialFieldSizeY={ this.props.fieldSizeY }
                />
            </div>;
        }
    }
