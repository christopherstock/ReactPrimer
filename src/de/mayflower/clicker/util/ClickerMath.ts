
    /*****************************************************************************
    *   Offers additional general arithmetic functionality.
    *
    *   @author     Christopher Stock
    *   @version    1.0
    *****************************************************************************/
    export class ClickerMath
    {
        /*****************************************************************************
        *   Returns an integer number of the specified range.
        *
        *   @param  from    Start of the range.
        *   @param  to      End of the range.
        *   @return         An integer number in between the specified range.
        *****************************************************************************/
        public static getRandomInt( from:number, to:number ):number
        {
            return Math.floor( ( Math.random() * ( 1 + to - from ) ) + from );
        }
    }
