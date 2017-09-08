
    import * as React from 'react';
    import * as rp    from '../../rp';

    /*******************************************************************************************************************
    *   Represents the Tic Tac Toe board.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class Board extends React.Component<null, rp.BoardProps>
    {
        /***************************************************************************************************************
        *   Creates a new Board.
        ***************************************************************************************************************/
        public constructor()
        {
            super();

            const defaultSquares:Array<string> = [
                "0", "1", "2",
                "3", "4", "5",
                "6", "7", "8",
            ];

            this.state = {
                squares: defaultSquares,
                xIsNext: true,
            };
        }

        /***************************************************************************************************************
        *   Renders this component.
        *
        *   @return The rendered React element.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

            return (
                <div>
                    <div className="status">{status}</div>
                    <div className="board-row">
                        { this.renderSquare( 0 ) }
                        { this.renderSquare( 1 ) }
                        { this.renderSquare( 2 ) }
                    </div>
                    <div className="board-row">
                        { this.renderSquare( 3 ) }
                        { this.renderSquare( 4 ) }
                        { this.renderSquare( 5 ) }
                    </div>
                    <div className="board-row">
                        { this.renderSquare( 6 ) }
                        { this.renderSquare( 7 ) }
                        { this.renderSquare( 8 ) }
                    </div>
                </div>
            );
        }

        /***************************************************************************************************************
        *   Renders the current square field.
        *
        *   @param i The id if the square field to render.
        *
        *   @return The rendered React element.
        ***************************************************************************************************************/
        public renderSquare( i:any )
        {
            console.log( "Board.renderSquare()" );

            return <rp.Square
                value={   this.state.squares[ i ]          }
                onClick={ () => this.handleBoardClick( i ) }
            />;
        }

        /***************************************************************************************************************
        *   Being invoked when any square of the board is clicked.
        *
        *   @param i The id if the square field to render.
        *
        *   @return The rendered React element.
        ***************************************************************************************************************/
        private handleBoardClick( i:any )
        {
            const squares = this.state.squares.slice();
            squares[ i ] = ( this.state.xIsNext ? 'X' : 'O' );
            this.setState(
                {
                    squares: squares,
                    xIsNext: !this.state.xIsNext,
                }
            );
        }
    }
