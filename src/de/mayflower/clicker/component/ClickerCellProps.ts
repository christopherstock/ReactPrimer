
    import * as clicker from '../clicker';

    /*******************************************************************************************************************
    *   All properties for one cell.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export interface ClickerCellProps
    {
        // TODO prune the key? assign globally!

        /** The unique key prop. */
        key                     :number;

        /** The current cell color. */
        color                   :clicker.ClickerCellColor;

        /** The callback to invoke when this cell is clicked. */
        parentCallback          :any;

        /** The debug caption for this cell. */
        debugCaption            :string;
    }
