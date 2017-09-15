
    import * as clicker from '../clicker';

    /*******************************************************************************************************************
    *   The interface that specifies the state for the clicker board.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export interface ClickerBoardState
    {
        // TODO rename to 'cell'!

        /** All fields the board consists of. */
        fields                  :clicker.ClickerCell[][];
    }
