
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
        private     static      currentHoveringCells        :clicker.ClickerCellCoordinate[]        = [];

        /***************************************************************************************************************
        *   Creates a new clicker board.
        ***************************************************************************************************************/
        public constructor( props:clicker.ClickerBoardProps )
        {
            super( props );

            this.state =
            {
                cells: this.createEmptyBoard(),
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
                        key:            0,
                        color:          clicker.ClickerCellManager.getRandomColor( this.props.numberOfColors ),
                        className:      "clickerCell",
                        debugCaption:   null,
                        onClick:        null,
                        onMouseEnter:   null,
                        onMouseLeave:   null,
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

            return this.state.cells.map
            (
                function( m:clicker.ClickerCellProps[] )
                {
                    let columnId = x;
                    ++x;
                    y = 0;

                    return <div className="clickerColumn" key={ columnKey++ }>
                        {
                            m.map
                            (
                                function( n:clicker.ClickerCellProps )
                                {
                                    let rowId = y;
                                    ++y;

                                    return <clicker.ClickerCell
                                        key={          clicker.Clicker.currentCellIndex++                        }
                                        color={        n.color                                                   }
                                        className={    n.className                                               }
                                        debugCaption={ columnId + "," + rowId                                    }
                                        onClick={      () => { staticThis.onCellClick(      columnId, rowId ); } }
                                        onMouseEnter={ () => { staticThis.onCellMouseEnter( columnId, rowId ); } }
                                        onMouseLeave={ () => { staticThis.onCellMouseLeave( columnId, rowId ); } }
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
        private onCellClick( x:number, y:number ) : void
        {
            console.log( "onCellClick [" + x + "][" + y + "]" );

            this.unhoverAllCells();

            let affectedCellCoordinates:clicker.ClickerCellCoordinate[] = clicker.ClickerCellManager.getAffectedCellCoordinates
            (
                this.state.cells,
                x,
                y
            );

            if ( affectedCellCoordinates.length == 0 )
            {
                return;
            }

            // deep clone all cells
            let newCells:clicker.ClickerCellProps[][] = clicker.ClickerCellManager.deepCloneCells
            (
                this.state.cells
            );

            // clear all affected cells
            for ( let affectedCoordinate of affectedCellCoordinates )
            {
                newCells[ affectedCoordinate.x ][ affectedCoordinate.y ].color = clicker.ClickerCellColor.CLEAR;
            }

            // collapse all cleared cells
            clicker.ClickerCellManager.collapseClearedCells( newCells );

            // hide all empty columns
            newCells = clicker.ClickerCellManager.reduceEmptyColumns( newCells );

            // assign all new cells
            this.setState(
                {
                    cells: newCells,
                }
            );
        }

        /***************************************************************************************************************
        *   Being invoked when the mouse enters a cell on the board.
        *
        *   @param x The x coordinatie of the cell that has been entered.
        *   @param y The y coordinatie of the cell that has been entered.
        ***************************************************************************************************************/
        private onCellMouseEnter(x:number, y:number ) : void
        {
            console.log( "onCellMouseEnter [" + x + "][" + y + "]" );

            // no change if this cell is still in the compound hovering area
            if ( clicker.ClickerCellManager.contains( clicker.ClickerBoard.currentHoveringCells, x, y ) )
            {
                return;
            }

            this.unhoverAllCells();

            clicker.ClickerBoard.currentHoveringCells = clicker.ClickerCellManager.getAffectedCellCoordinates
            (
                this.state.cells,
                x,
                y
            );

            if ( clicker.ClickerBoard.currentHoveringCells.length == 0 )
            {
                return;
            }

            let newCells:clicker.ClickerCellProps[][] = this.state.cells;

            // hover all affected cells
            for ( let affectedCoordinate of clicker.ClickerBoard.currentHoveringCells )
            {
                newCells[ affectedCoordinate.x ][ affectedCoordinate.y ].className = "clickerCellHover";
            }

            // assign all new cells
            this.setState(
                {
                    cells: newCells,
                }
            );
        }

        /***************************************************************************************************************
        *   Being invoked when the mouse leaves a cell on the board.
        *
        *   @param x The x coordinatie of the cell that has been left.
        *   @param y The y coordinatie of the cell that has been left.
        ***************************************************************************************************************/
        private onCellMouseLeave(x:number, y:number ) : void
        {
            console.log( "onCellMouseLeave [" + x + "][" + y + "]" );

            this.unhoverAllCells();
        }

        /***************************************************************************************************************
        *   Alters all cells css class to the default one.
        ***************************************************************************************************************/
        private unhoverAllCells() : void
        {
            let newCells:clicker.ClickerCellProps[][] = this.state.cells;

            for ( let affectedCoordinate of clicker.ClickerBoard.currentHoveringCells )
            {
                newCells[ affectedCoordinate.x ][ affectedCoordinate.y ].className = "clickerCell";
            }
            clicker.ClickerBoard.currentHoveringCells = [];

            // assign all new cells
            this.setState(
                {
                    cells: newCells,
                }
            );
        }
    }
