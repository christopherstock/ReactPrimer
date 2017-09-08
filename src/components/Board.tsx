
    import * as React from 'react';
    import * as rp    from '../rp';

    /*******************************************************************************************************************
    *   Represents the Tic Tac Toe board.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class Board extends React.Component
    {
        /***************************************************************************************************************
        *   Renders the current square field.
        *
        *   @param i The id if the square field to render.
        *
        *   @return The rendered React element.
        ***************************************************************************************************************/
        public renderSquare( i:any )
        {
            return <rp.Square />;
        }

        /***************************************************************************************************************
        *   Renders this component.
        *
        *   @return The rendered React element.
        ***************************************************************************************************************/
        render() : JSX.Element
        {
            const status = 'Next player: X';

            return (
                <div>
                <div className="status">{status}</div>
                <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                </div>
                <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                </div>
                <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                </div>
                </div>
            );
        }
    }
