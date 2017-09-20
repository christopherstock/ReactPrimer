
    import * as clicker from '../clicker';

    /*******************************************************************************************************************
    *   All properties for one cell.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export interface ClickerCellProps
    {
        /** The unique key prop. */
        key                     :number;

        /** The current cell color. */
        color                   :clicker.ClickerCellColor;

        /** The name of the current css class. */
        className               :string;

        /** The debug caption for this cell. */
        debugCaption            :string;

        /** The callback to invoke when this cell is clicked. */
        onClick                 :any;

        /** The callback to invoke when the mouse enters this cell. */
        onMouseEnter            :any;

        /** The callback to invoke when the mouse leaves this cell. */
        onMouseLeave            :any;
    }
