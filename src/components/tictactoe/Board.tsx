
    import * as React from 'react';
    import * as rp    from '../../rp';

    /*******************************************************************************************************************
    *   Represents the Tic Tac Toe board.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class Board extends React.Component<null, rp.BoardState>
    {
        /***************************************************************************************************************
        *   Creates a new Board.
        ***************************************************************************************************************/
        public constructor()
        {
            super();

            const defaultSquares:Array<string> = new Array<string>( 9 );

            this.state = {
                squares: defaultSquares,
                xIsNext: true,
/*
                history: [ defaultSquares, ],
*/
            };
        }

        /***************************************************************************************************************
        *   Renders this component.
        *
        *   @return The rendered React element.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            const winner = this.calculateWinner( this.state.squares );

            let status:string = null;
            if ( winner )
            {
                status = 'Winner: ' + winner;
            }
            else
            {
                status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
            }

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
            console.log( "Handle board click" );

            // check if one player has won
            if ( this.calculateWinner( this.state.squares ) )
            {
                console.log( "The game is already won!" );

                return;
            }

            // break if the current field is already filled
            if ( this.state.squares[ i ] != null )
            {
                console.log( "This field is already busy!" );

                return;
            }

            // copy squares & history, toggle one square, append history and update state
            const squares = this.state.squares.slice();
            squares[ i ] = ( this.state.xIsNext ? 'X' : 'O' );
/*
            const history = this.state.history.slice();
            history.push( squares );
*/
            this.setState(
                {
                    squares: squares,
                    xIsNext: !this.state.xIsNext,
/*
                    history: history,
*/
                }
            );
        }

        /***************************************************************************************************************
        *   Checks if one party has won.
        *
        *   @param squares All fields of the board to check for a winner.
        *
        *   @return X O or null depending on the current winner.
        ***************************************************************************************************************/
        private calculateWinner( squares:Array<string> ) : string
        {
            const lines = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ];

            for (let i = 0; i < lines.length; i++) {
                const [a, b, c] = lines[i];
                if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
                }
            }

            return null;
        }
    }
