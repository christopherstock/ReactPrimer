
    import * as clicker from '../clicker';

    /*******************************************************************************************************************
    *   All properties for one cell.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export interface ClickerCellProps
    {
        /** The debug caption for this cell. */
        debugCaption            :string;

        /** The unique key prop. */
        key                     :number;

        /** The current cell color. */
        color                   :clicker.ClickerCellColor;

        /** The callback to invoke when this cell is clicked. */
        onClick                 :any;

        /** The name of the current css class. */
        className               :string;
    }
