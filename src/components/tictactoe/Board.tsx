
    import * as React from 'react';
    import * as rp    from '../../rp';

    /*******************************************************************************************************************
    *   Represents the Tic Tac Toe board.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class Board extends React.Component
    {
        /***************************************************************************************************************
        *   Renders this component.
        *
        *   @return The rendered React element.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            const status = 'Next player: X';

            return (
                <div>
                    <div className="status">{status}</div>
                    <div className="board-row">
                        { rp.Square.renderSquare( 0 ) }
                        { rp.Square.renderSquare( 1 ) }
                        { rp.Square.renderSquare( 2 ) }
                    </div>
                    <div className="board-row">
                        { rp.Square.renderSquare( 3 ) }
                        { rp.Square.renderSquare( 4 ) }
                        { rp.Square.renderSquare( 5 ) }
                    </div>
                    <div className="board-row">
                        { rp.Square.renderSquare( 6 ) }
                        { rp.Square.renderSquare( 7 ) }
                        { rp.Square.renderSquare( 8 ) }
                    </div>
                </div>
            );
        }
    }
