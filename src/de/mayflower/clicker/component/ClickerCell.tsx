
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
        }

        /***************************************************************************************************************
        *   Renders the 'clicker' board component.
        *
        *   @return The rendered Board.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            return <div
                className="clickerField"
                onClick={ this.props.parentCallback }
                style={ { backgroundColor: this.props.color.valueOf() } }
            >
                { this.props.caption }
            </div>;
        }
    }
