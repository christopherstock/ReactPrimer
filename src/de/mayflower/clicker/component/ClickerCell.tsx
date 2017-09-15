
    import * as React   from 'react';
    import * as clicker from '../clicker';

    /*******************************************************************************************************************
    *   Represents a field of the 'clicker' game board.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ClickerCell extends React.Component<clicker.ClickerCellProps, clicker.ClickerCellState>
    {
        /***************************************************************************************************************
        *   Creates a new 'clicker' field component.
        ***************************************************************************************************************/
        public constructor( props:clicker.ClickerCellProps )
        {
            super( props );

            // assign state directly
            this.state =
            {
                color: props.initialColor
            };
        }

        /***************************************************************************************************************
        *   Renders the 'clicker' board component.
        *
        *   @return The rendered Board.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
/*
            console.log( "Render cell [" + this.props.x + "][" + this.props.y + "] [" + this.state.color + "]" );
*/
            return <div
                className="clickerField"
                onClick={ () => this.props.parentCallback( this.props.x, this.props.y ) }
                style={ { backgroundColor: this.state.color.valueOf() } }
            >
                { this.props.x + ", " + this.props.y }
            </div>;
        }
    }
