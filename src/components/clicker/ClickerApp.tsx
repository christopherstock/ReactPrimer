
    import * as React from 'react';
    import * as rp    from '../../rp';

    /*******************************************************************************************************************
    *   TODO ASAP   Refactor package structure.
    *   TODO ASAP   acclaim and create title dynamically in index.tsx
    *   TODO ASAP   Ditch all classes outside the clicker package.
    *   TODO ASAP   create Main.main() and invoke from index.tsx?
    *   TODO ASAP   Outsource all settings from index.tsx to Settings class etc.?
    *   TODO ASAP   New class 'ClickerField'?
    *   TODO ASAP   Log x and y coordinate on clicking a field ..
    *   TODO ASAP   Ditch missing key warning
    *
    *   TODO WEAK   Complete the new game engine.
    *   TODO WEAK   Enumeration for all field states.
    *   TODO WEAK   Add game state ( won, etc. ) to ClickerAppState
    *   TODO WEAK   show state, score etc. in ClickerApp::render()
    *   TODO WEAK   learn "High-order component"!
    *
    *   Represents the 'clicker' game.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ClickerApp extends React.Component<rp.ClickerAppProps, rp.ClickerAppState>
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
