
    /*******************************************************************************************************************
    *   The interface that specifies the properties for the Board class.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export interface BoardProps
    {
        /** All square values. */
        squares             :Array<string>;

        /** The callback to invoke when being clicked. */
        onClick             :any;
    }
