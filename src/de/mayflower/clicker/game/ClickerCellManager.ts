
    import * as clicker from '../clicker';

    /*******************************************************************************************************************
    *   Manages different cell states.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ClickerCellManager
    {
        /***************************************************************************************************************
        *   The main class represents the application's entry point.
        *
        *   @param numberOfColors The number of different colors to assign.
        ***************************************************************************************************************/
        public static getRandomColor( numberOfColors:number ) : clicker.ClickerCellColor
        {
            switch ( clicker.ClickerMath.getRandomInt( 0, numberOfColors - 1 ) )
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
        *   @param oldCells The 2d array of clicker cell props.
        *
        *   @return A cloned instance of the 2d array.
        ***************************************************************************************************************/
        public static deepCloneCells(oldCells:clicker.ClickerCellProps[][] ) : clicker.ClickerCellProps[][]
        {
            let newCells = new Array<Array<clicker.ClickerCellProps>>( oldCells.length );

            for ( let x:number = 0; x < newCells.length; ++x )
            {
                newCells[ x ] = new Array<clicker.ClickerCellProps>( oldCells[ x ].length );

                for ( let y:number = 0; y < newCells[ x ].length; ++y )
                {
                    newCells[ x ][ y ] = oldCells[ x ][ y ];
                }
            }

            return newCells;
        }

        /***************************************************************************************************************
        *   Determines all continguous cells in the given 2d cell array from the given coordinate.
        *
        *   @param allCells        The 2d array with all cells.
        *   @param x               The given coordinate x to determine all continguous cells for.
        *   @param y               The given coordinate y to determine all continguous cells for.
        *   @param determinedCells All already gathered cell coordinates affected so far.
        *
        *   @return All continguous cell coordinates including the clicked one.
        ***************************************************************************************************************/
        private static getContinguousCellCoordinates
        (
            allCells:clicker.ClickerCellProps[][],
            x:number,
            y:number,
            determinedCells:clicker.ClickerCellCoordinate[] = []
        )
        : clicker.ClickerCellCoordinate[]
        {
            let colorToPick = allCells[ x ][ y ].color;

            // add CLICKED cell if not contained
            if ( !clicker.ClickerCellManager.contains( determinedCells, x, y ) )
            {
                determinedCells.push( { x: x, y: y, } );
            }

            // add LEFT cell if matching
            if
            (
                    x > 0
                &&  allCells[ x - 1 ][ y ].color == colorToPick
                && !clicker.ClickerCellManager.contains( determinedCells, x - 1, y )
            )
            {
                clicker.ClickerCellManager.getContinguousCellCoordinates
                (
                    allCells,
                    x - 1,
                    y,
                    determinedCells
                );
            }

            // add TOP cell if matching
            if
            (
                    y > 0
                &&  allCells[ x ][ y - 1 ].color == colorToPick
                && !clicker.ClickerCellManager.contains( determinedCells, x, y - 1 )
            )
            {
                clicker.ClickerCellManager.getContinguousCellCoordinates
                (
                    allCells,
                    x,
                    y - 1,
                    determinedCells
                );
            }

            // add RIGHT cell if matching
            if
            (
                    x < allCells.length - 1
                &&  allCells[ x + 1 ][ y ].color == colorToPick
                && !clicker.ClickerCellManager.contains( determinedCells, x + 1, y )
            )
            {
                clicker.ClickerCellManager.getContinguousCellCoordinates
                (
                    allCells,
                    x + 1,
                    y,
                    determinedCells
                );
            }

            // add BOTTOM cell if matching
            if
            (
                    y < allCells[ x ].length - 1
                &&  allCells[ x ][ y + 1 ].color == colorToPick
                && !clicker.ClickerCellManager.contains( determinedCells, x, y + 1 )
            )
            {
                clicker.ClickerCellManager.getContinguousCellCoordinates
                (
                    allCells,
                    x,
                    y + 1,
                    determinedCells
                );
            }

            return determinedCells;
        }

        /***************************************************************************************************************
        *   Determines all affected cells in the given 2d cell array on clicking on the specified coordinate.
        *
        *   @param allCells        The 2d array with all cells.
        *   @param x               The given coordinate x to determine all continguous cells for.
        *   @param y               The given coordinate y to determine all continguous cells for.
        *
        *   @return All affected cell coordinates including the clicked one.
        ***************************************************************************************************************/
        public static getAffectedCellCoordinates
        (
            allCells:clicker.ClickerCellProps[][],
            x:number,
            y:number,
        )
        : clicker.ClickerCellCoordinate[]
        {
            // prevent exceptions
            if ( allCells[ x ][ y ] == null )
            {
                return null;
            }

            // clicking clear cells has no effect
            if ( allCells[ x ][ y ].color == clicker.ClickerCellColor.CLEAR )
            {
                clicker.ClickerDebug.log( "Clear cell not affected." );
                return [];
            }

            // get continguous cells
            let continguousCoordinates:clicker.ClickerCellCoordinate[] = clicker.ClickerCellManager.getContinguousCellCoordinates
            (
                allCells,
                x,
                y
            );
            clicker.ClickerDebug.log( "Determined [" + continguousCoordinates.length + "] affected cells" );

            return continguousCoordinates;
        }

        /***************************************************************************************************************
        *   Checks if the specified coordinate array contains the specified coordinate.
        *
        *   @param coordinates     All coordinates.
        *   @param x               The coordinate x.
        *   @param y               The coordinate y.
        *
        *   @return <code>true</code> if the given coordinate is contained in the given coordinate array.
        *           Otherwise <code>false</code>.
        ***************************************************************************************************************/
        public static contains
        (
            coordinates:clicker.ClickerCellCoordinate[],
            x:number,
            y:number
        )
        : boolean
        {
            for ( let coordinate of coordinates )
            {
                if ( coordinate.x == x && coordinate.y == y )
                {
                    return true;
                }
            }

            return false;
        }

        /***************************************************************************************************************
        *   Collapses all cleared cells in the given array.
        *
        *   @param cells All cells to collapse cleared cells for.
        ***************************************************************************************************************/
        public static collapseClearedCells( cells:clicker.ClickerCellProps[][] )
        {
            // browse all columns
            for ( let x:number = 0; x < cells.length; ++x )
            {
                // gather all filled cells in this column
                let filledCells:clicker.ClickerCellColor[] = [];

                // browse all cells from TOP to BOTTOM
                for ( let y:number = 0; y < cells[ x ].length; ++y )
                {
                    if ( cells[ x ][ y ].color != clicker.ClickerCellColor.CLEAR )
                    {
                        // remember this cell
                        filledCells.push( cells[ x ][ y ].color );

                        // clear this cell
                        cells[ x ][ y ].color = clicker.ClickerCellColor.CLEAR;
                    }
                }

                // assign all filled cells to the bottom
                for ( let y:number = 0; y < filledCells.length; ++y )
                {
                    cells[ x ][ y + cells[ x ].length - filledCells.length ].color = filledCells[ y ];
                }
            }
        }

        /***************************************************************************************************************
        *   Collapses all cleared columns in the given array.
        *
        *   @param cells All cells to collapse cleared cells for in a 2d array.
        *
        *   @return the new reduced 2d array.
        ***************************************************************************************************************/
        public static reduceEmptyColumns( cells:clicker.ClickerCellProps[][] ) : clicker.ClickerCellProps[][]
        {
            let reducedCells:clicker.ClickerCellProps[][] = [];

            // browse all columns
            for ( let x:number = 0; x < cells.length; ++x )
            {
                // check if all cells in this column are empty
                let containsFilledCell:boolean = false;

                // browse all cells from TOP to BOTTOM
                for ( let y:number = 0; y < cells[ x ].length; ++y )
                {
                    if ( cells[ x ][ y ].color != clicker.ClickerCellColor.CLEAR )
                    {
                        containsFilledCell = true;
                        break;
                    }
                }

                // append this column if at least one colored cell is contained
                if ( containsFilledCell )
                {
                    reducedCells.push( cells[ x ] );
                }
            }

            return reducedCells;
        }
    }
