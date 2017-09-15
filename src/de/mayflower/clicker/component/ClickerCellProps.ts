
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

        /** Coordinate x of this field. */
        x                       :number;

        /** Coordinate y of this field. */
        y                       :number;

        /** The initial field state. */
        initialColor            :clicker.ClickerFieldState;

        /** The callback to invoke when this cell is clicked. */
        parentCallback          :any;
    }
