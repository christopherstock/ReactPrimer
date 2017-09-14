
    import * as clicker from '../clicker';

    /*******************************************************************************************************************
    *   Manages different field states.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ClickerFieldStateManager
    {
        /***************************************************************************************************************
        *   The main class represents the application's entry point.
        ***************************************************************************************************************/
        public static getRandomColor() : clicker.ClickerFieldState
        {
            switch ( clicker.ClickerMath.getRandomInt( 0, 2 ) )
            {
                case 0:  return clicker.ClickerFieldState.COLOR_BLUE;
                case 1:  return clicker.ClickerFieldState.COLOR_RED;
                case 2:  return clicker.ClickerFieldState.COLOR_GREEN;
                case 3:  return clicker.ClickerFieldState.COLOR_ORANGE;

                default: return clicker.ClickerFieldState.COLOR_YELLOW;
            }
        }


    }
