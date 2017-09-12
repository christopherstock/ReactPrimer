
    import * as React   from 'react';
    import * as clicker from '../clicker';

    /*******************************************************************************************************************
    *   Represents a field of the 'clicker' game board.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ClickerField extends React.Component<clicker.ClickerFieldProps, clicker.ClickerFieldState>
    {
        /***************************************************************************************************************
        *   Creates a new 'clicker' field component.
        ***************************************************************************************************************/
        public constructor( props:clicker.ClickerBoardProps )
        {
            super( props );

/*
            // assign state directly
            this.state =
            {
                fields: fields,
            };
*/
        }

        /***************************************************************************************************************
        *   Renders the 'clicker' board component.
        *
        *   @return The rendered Board.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
/*
            console.log( "render ClickerBoard" );

            return <div className="clickerBoard">
                { this.renderFields() }
            </div>;
*/
            return null;
        }
    }
