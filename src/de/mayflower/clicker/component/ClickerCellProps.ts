
    import * as clicker from '../clicker';

    /*******************************************************************************************************************
    *   All properties of the 'clicker' field.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export interface ClickerCellProps
    {
        /** Coordinate x of this field. */
        x                       :number;

        /** Coordinate y of this field. */
        y                       :number;

        /** The unique key prop. */
        key                     :number;

        /** The initial field state. */
        initialColor            :clicker.ClickerFieldState;
    }
