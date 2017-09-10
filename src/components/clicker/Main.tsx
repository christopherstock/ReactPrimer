
    import * as React from 'react';
    import * as rp    from '../../rp';

    /*******************************************************************************************************************
    *   TODO ASAP Enumeration for all field states.
    *
    *   Represents the 'clicker' game.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class Main extends React.Component<rp.MainProps, rp.MainState>
    {
        /***************************************************************************************************************
        *   Renders the 'clicker' main game component.
        *
        *   @return The rendered React element.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            let acclaim:JSX.Element  = <h1>Welcome { this.props.playerName }</h1>;
            let headline:JSX.Element = <h2>Your board is { this.props.fieldSizeX } x { this.props.fieldSizeY }</h2>;

            // TODO show state, score etc.

            return <div className="mainContainer">
                { acclaim  }
                { headline }
                <rp.ClickerBoard
                    fieldSizeX={ this.props.fieldSizeX }
                    fieldSizeY={ this.props.fieldSizeY }
                />
            </div>;
        }
    }
