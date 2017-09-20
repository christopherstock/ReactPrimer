
    import * as React   from 'react';
    import * as clicker from '../clicker';

    /*******************************************************************************************************************
    *   Represents the 'clicker' information panel.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ClickerInfo extends React.Component<clicker.ClickerInfoProps, clicker.ClickerInfoState>
    {
        /***************************************************************************************************************
        *   Creates a new clicker information panel.
        ***************************************************************************************************************/
        public constructor( props:clicker.ClickerInfoProps )
        {
            super( props );

            this.state =
            {
                message: "Enjoy your game!",
            };
        }

        /***************************************************************************************************************
        *   Renders the 'clicker' board component.
        *
        *   @return The rendered Board.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            clicker.ClickerDebug.log( "render ClickerInfo" );

            return <div className="clickerInfo">
                { this.state.message }
            </div>;
        }
    }
