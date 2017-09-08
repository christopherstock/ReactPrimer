
    /*******************************************************************************************************************
    *   The interface that specifies the state for the game class.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export interface GameState
    {
        /** Stores the squares of each turn. */
        squares             :Array<string>;

        /** Indicates if X has the next turn. */
        xIsNext             :boolean;
    }
