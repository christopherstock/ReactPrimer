
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
/*
            this.state =
            {
                history:
                [
                    {
                        squares: new Array<string>( 9 ),
                    }
                ],
                xIsNext: true,
            };
*/
        }

        /***************************************************************************************************************
        *   Renders the game component.
        *
        *   @return The rendered React element.
        ***************************************************************************************************************/
        public render()
        {
            return(
                <div className="game">
                <div className="game-board">
                <rp.Board />
                </div>
                <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
                </div>
                </div>
            );
        }
    }
