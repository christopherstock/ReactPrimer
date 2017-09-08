
    /*******************************************************************************************************************
    *   The interface that specifies the state for the Board class.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export interface BoardState
    {
        /** All square values. */
        squares             :Array<string>;

        /** Indicates if X has the next turn. */
        xIsNext             :boolean;
    }
