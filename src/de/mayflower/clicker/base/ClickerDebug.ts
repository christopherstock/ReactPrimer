
    import * as clicker  from "../clicker";

    /*******************************************************************************************************************
    *   The debug system that wrapps console logging.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ClickerDebug
    {
        /***************************************************************************************************************
        *   Logs the given message to the console.
        *
        *   @param msg The message to log to the console.
        ***************************************************************************************************************/
        public static log( msg:any ) : void
        {
            if ( clicker.ClickerSettings.DEBUG_MODE )
            {
                console.log( msg );
            }
        }
    }
