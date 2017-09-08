
    import * as React from 'react';
    import * as rp    from '../../rp';

    /*******************************************************************************************************************
    *   Represents the Tic Tac Toe game.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class Game extends React.Component<any, rp.GameState>
    {
        /***************************************************************************************************************
        *   Constructs the game component.
        *
        *   @return The rendered React element.
        ***************************************************************************************************************/
        constructor()
        {
            super();

            this.state =
            {
                squares: new Array<string>( 9 ),
                xIsNext: true,
            };
        }

        /***************************************************************************************************************
        *   Renders the game component.
        *
        *   @return The rendered React element.
        ***************************************************************************************************************/
        public render()
        {
            const winner  = this.calculateWinner( this.state.squares );

            let status = null;
            if ( winner )
            {
                status = 'Winner: ' + winner;
            }
            else
            {
                status = 'Next player: ' + ( this.state.xIsNext ? 'X' : 'O' );
            }

            return(
                <div className="game">
                <div className="game-board">
                <rp.Board
                    squares={ this.state.squares }
                    onClick={ ( i:any ) => this.handleBoardClick( i ) }
                />
                </div>
                <div className="game-info">
                <div>{ status }</div>
                <ol>{/* TODO */}</ol>
                </div>
                </div>
            );
        }

        /***************************************************************************************************************
        *   Being invoked when any square of the board is clicked.
        *
        *   @param i The id if the square field to render.
        *
        *   @return The rendered React element.
        ***************************************************************************************************************/
        private handleBoardClick=( i:any )=>
        {
            console.log( "Handle board click" );

            const squares = this.state.squares.slice();
            if ( this.calculateWinner( squares ) || squares[ i ] )
            {
                return;
            }

            squares[ i ] = ( this.state.xIsNext ? 'X' : 'O' );

            this.setState(
                {
                    squares: squares,
                    xIsNext: !this.state.xIsNext,
                }
            );
        };

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
                [ 0, 1, 2, ],
                [ 3, 4, 5, ],
                [ 6, 7, 8, ],
                [ 0, 3, 6, ],
                [ 1, 4, 7, ],
                [ 2, 5, 8, ],
                [ 0, 4, 8, ],
                [ 2, 4, 6, ],
            ];

            for ( let i = 0; i < lines.length; i++ )
            {
                const [ a, b, c, ] = lines[ i ];
                if ( squares[ a ] && squares[ a ] === squares[ b ] && squares[ a ] === squares[ c ] )
                {
                    return squares[ a ];
                }
            }

            return null;
        }
    }
