
    import * as clicker from '../clicker';

    /*******************************************************************************************************************
    *   All properties of the 'clicker' field.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export interface ClickerCellProps
    {
        /** The unique key prop. */
        key                     :number;

        /** The initial field state. */
        color                   :clicker.ClickerCellColor;

        /** The callback to invoke when this cell is clicked. */
        parentCallback          :any;

        /** The debug caption for this cell. */
        caption                 :string;
    }
