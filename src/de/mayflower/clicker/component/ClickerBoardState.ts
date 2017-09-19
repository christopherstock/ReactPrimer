
    import * as clicker from '../clicker';

    /*******************************************************************************************************************
    *   The interface that specifies the state for the clicker board.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export interface ClickerBoardState
    {
        /** All cell properties the board consists of. */
        cells                   :clicker.ClickerCellProps[][];
    }
