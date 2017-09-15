
    import * as clicker from '../clicker';

    /*******************************************************************************************************************
    *   Manages different field states.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ClickerCellManager
    {
        /***************************************************************************************************************
        *   The main class represents the application's entry point.
        ***************************************************************************************************************/
        public static getRandomColor() : clicker.ClickerCellColor
        {
            switch ( clicker.ClickerMath.getRandomInt( 0, 2 ) )
            {
                case 0:  return clicker.ClickerCellColor.COLOR_BLUE;
                case 1:  return clicker.ClickerCellColor.COLOR_RED;
                case 2:  return clicker.ClickerCellColor.COLOR_GREEN;
                case 3:  return clicker.ClickerCellColor.COLOR_ORANGE;

                default: return clicker.ClickerCellColor.COLOR_YELLOW;
            }
        }

        /***************************************************************************************************************
        *   Clones all element of the given 2d array and returns the clone.
        *
        *   @param oldFields The 2d array of clicker field props.
        *
        *   @return A cloned instance of the 2d array.
        ***************************************************************************************************************/
        public static deepCloneFieldsArray( oldFields:clicker.ClickerCellProps[][] ) : clicker.ClickerCellProps[][]
        {
            let newFields = new Array<Array<clicker.ClickerCellProps>>( oldFields.length );

            for ( let x:number = 0; x < newFields.length; ++x )
            {
                newFields[ x ] = new Array<clicker.ClickerCellProps>( oldFields[ x ].length );

                for ( let y:number = 0; y < newFields[ x ].length; ++y )
                {
                    newFields[ x ][ y ] = oldFields[ x ][ y ];
                }
            }

            return newFields;
        }

        /***************************************************************************************************************
        *   Sets a new color for the specified field.
        *
        *   @param fields   The 2d array to set a new field color.
        *   @param x        Location x for the new field to set.
        *   @param y        Location y for the new field to set.
        *   @param newColor The new color to set.
        *
        *   @return A cloned instance of the 2d array.
        ***************************************************************************************************************/
        public static setNewCellColor
        (
            fields:clicker.ClickerCellProps[][],
            x:number,
            y:number,
            newColor:clicker.ClickerCellColor
        )
        {
            fields[ x ][ y ] = {
                x:              x,
                y:              y,
                key:            clicker.Clicker.currentCellIndex++,
                color:          newColor,
                parentCallback: fields[ x ][ y ].parentCallback,
            };
        }

        /***************************************************************************************************************
        *   Determines all affected though continguous cells in the given 2d cell array from the given coordinate.
        *
        *   @param allCells        The 2d array with all cells.
        *   @param x               The given coordinate x to determine all continguous fields for.
        *   @param y               The given coordinate y to determine all continguous fields for.
        *   @param determinedCells All already gathered cell coordinates affected so far.
        *
        *   @return A cloned instance of the 2d array.
        ***************************************************************************************************************/
        public static getAffectedCellCoordinates
        (
            allCells:clicker.ClickerCellProps[][],
            x:number,
            y:number,
            determinedCells:clicker.ClickerCellCoordinate[] = []
        )
        {
            let colorToPick = allCells[ x ][ y ].color;
            let affectedCellCoordinates:clicker.ClickerCellCoordinate[] = [];

            // add CLICKED cell
            affectedCellCoordinates.push( { x: x, y: y, } );

            // add LEFT cell if matching
            if ( x > 0 && allCells[ x - 1 ][ y ].color == colorToPick )
            {
                affectedCellCoordinates.push( { x: x - 1, y: y, } );
            }
            // add TOP cell if matching
            if ( y > 0 && allCells[ x ][ y - 1 ].color == colorToPick )
            {
                affectedCellCoordinates.push( { x: x, y: y - 1, } );
            }
            // add RIGHT cell if matching
            if ( x < allCells.length - 1 && allCells[ x + 1 ][ y ].color == colorToPick )
            {
                affectedCellCoordinates.push( { x: x + 1, y: y, } );
            }
            // add BOTTOM cell if matching
            if ( y < allCells[ x ].length - 1 && allCells[ x ][ y + 1 ].color == colorToPick )
            {
                affectedCellCoordinates.push( { x: x, y: y + 1, } );
            }

            return affectedCellCoordinates;
        }
    }
