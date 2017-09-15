
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

        // TODO Try the full reference too .. but a function is better!

        /** A reference to the parent board. */
        parentBoard             :clicker.ClickerBoard;



        // TODO try a function!

        parentCallback          :any;

    }
