
    import * as clicker from '../clicker';

    /*******************************************************************************************************************
    *   The interface that specifies the state for the clicker board.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export interface ClickerBoardState
    {
        /** All fields the board consists of. */
        cellProps                   :clicker.ClickerCellProps[][];
    }
