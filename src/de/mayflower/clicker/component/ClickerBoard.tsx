
    import * as React   from 'react';
    import * as clicker from '../clicker';

    /*******************************************************************************************************************
    *   Represents the 'clicker' game board.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ClickerBoard extends React.Component<clicker.ClickerBoardProps, clicker.ClickerBoardState>
    {
        /***************************************************************************************************************
        *   Creates a new clicker board.
        ***************************************************************************************************************/
        public constructor( props:clicker.ClickerBoardProps )
        {
            super( props );

            let cellProps:clicker.ClickerCellProps[][] = this.createEmptyBoard();

            // assign state directly
            this.state =
            {
                cellProps: cellProps,
            };
        }

        /***************************************************************************************************************
        *   Renders the 'clicker' board component.
        *
        *   @return The rendered Board.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            console.log( "render ClickerBoard" );

            return <div className="clickerBoard">
                { this.renderAllCells() }
            </div>;
        }

        /***************************************************************************************************************
        *   Creates an empty board represented by an empty 2d array of the desired size.
        *
        *   TODO prune?
        *
        *   @return The 2d array that represents all board cells.
        ***************************************************************************************************************/
        private createEmptyBoard() : clicker.ClickerCellProps[][]
        {
            let cells:clicker.ClickerCellProps[][] = new Array<Array<clicker.ClickerCellProps>>( this.props.boardSizeX );
            console.log( "Columns: " + cells.length );

            for ( let x:number = 0; x < cells.length; ++x )
            {
                cells[ x ] = new Array<clicker.ClickerCellProps>( this.props.boardSizeY );
                console.log( "Rows: " + cells[ x ].length );

                for ( let y:number = 0; y < cells[ x ].length; ++y )
                {
                    cells[ x ][ y ] = {
                        key:            clicker.Clicker.currentCellIndex++,
                        color:          clicker.ClickerCellManager.getRandomColor( this.props.numberOfColors ),
                        parentCallback: null,
                        debugCaption:   null,
                    };
                }
            }

            return cells;
        }

        /***************************************************************************************************************
        *   Renders the board into an one-dimensional JSX element array so it can be rendered.
        *
        *   @return All cells of the board in a streamed 1d array of JSX elements.
        ***************************************************************************************************************/
        private renderAllCells() : JSX.Element[]
        {
            let columnKey:number = 0;
            let x:number         = 0;
            let y:number         = 0;

            let staticThis:ClickerBoard = this;

            return this.state.cellProps.map
            (
                function( m:clicker.ClickerCellProps[] )
                {
                    let myX = x;
                    ++x;
                    y = 0;

                    return <div className="clickerColumn" key={ columnKey++ }>
                        {
                            m.map
                            (
                                function( n:clicker.ClickerCellProps )
                                {
                                    let myY = y;
                                    ++y;

                                    return <clicker.ClickerCell
                                        key={            n.key            }
                                        color={          n.color          }
                                        parentCallback={ () => { staticThis.onCellClicked( myX, myY ); } }
                                        debugCaption={   myX + "," + myY }
                                    />
                                }
                            )
                        }
                    </div>;
                }
            )
        }

        /***************************************************************************************************************
        *   Being invoked when a cell on the board is clicked.
        *
        *   @param x The x coordinatie of the cell that has been clicked.
        *   @param y The y coordinatie of the cell that has been clicked.
        ***************************************************************************************************************/
        private onCellClicked( x:number, y:number ) : void
        {
            console.log( "onCellClicked [" + x + "][" + y + "]" );

            // clicking clear cells has no effect
            if ( this.state.cellProps[ x ][ y ].color == clicker.ClickerCellColor.CLEAR )
            {
                console.log( "Clicked a clear cell." );
                return;
            }

            // clone all cells
            let newCellProps:clicker.ClickerCellProps[][] = clicker.ClickerCellManager.deepCloneCells(
                this.state.cellProps
            );

            // get affected cells
            let affectedCellCoordinates:clicker.ClickerCellCoordinate[] = clicker.ClickerCellManager.getAffectedCellCoordinates
            (
                newCellProps,
                x,
                y
            );
            console.log( "Determined [" + affectedCellCoordinates.length + "] affected cells" );

            // at least two cells must be affected to clear
            if ( affectedCellCoordinates.length < 2 )
            {
                console.log( "Single cell clicked." );
                return;
            }

            // clear all affected cells
            for ( let affectedCoordinate of affectedCellCoordinates )
            {
                clicker.ClickerCellManager.setNewCellColor
                (
                    newCellProps,
                    affectedCoordinate.x,
                    affectedCoordinate.y,
                    clicker.ClickerCellColor.CLEAR
                );
            }

            // collapse all cleared cells
            clicker.ClickerCellManager.collapseClearedCells( newCellProps );

            // hide all empty columns
            newCellProps = clicker.ClickerCellManager.reduceEmptyColumns( newCellProps );

            // assign all new cells
            this.setState(
                {
                    cellProps: newCellProps,
                }
            );
        }
    }
