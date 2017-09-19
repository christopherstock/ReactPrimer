
    import * as React   from 'react';
    import * as clicker from '../clicker';

    /*******************************************************************************************************************
    *   Represents a cell of the game board.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ClickerCell extends React.Component<clicker.ClickerCellProps, clicker.ClickerCellState>
    {
        /***************************************************************************************************************
        *   Creates a new cell.
        ***************************************************************************************************************/
        public constructor( props:clicker.ClickerCellProps )
        {
            super( props );
        }

        /***************************************************************************************************************
        *   Renders the cell.
        *
        *   @return The rendered cell.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            return <div
                className="clickerCell"
                onClick={ this.props.parentCallback }
                style={ { backgroundColor: this.props.color.valueOf() } }
            >
                { this.props.debugCaption }
            </div>;
        }
    }
