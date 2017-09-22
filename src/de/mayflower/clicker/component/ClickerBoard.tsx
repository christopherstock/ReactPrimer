
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
        /** Saves all cells that are currently in the 'hovering' state. */
        private     static      currentHoveringCells        :clicker.ClickerCellCoordinate[]        = [];

        /** The last mouse click coordinate X. */
        private     static      lastMouseClickX             :number                                 = -1;

        /** The last mouse click coordinate Y. */
        private     static      lastMouseClickY             :number                                 = -1;

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
            clicker.ClickerDebug.log( "render ClickerBoard" );

            return <div
                className="clickerBoard"
                onMouseLeave={ () => { this.unhoverAllCells(); } }
            >
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
            clicker.ClickerDebug.log( "Columns: " + cells.length );

            for ( let x:number = 0; x < cells.length; ++x )
            {
                cells[ x ] = new Array<clicker.ClickerCellProps>( this.props.boardSizeY );
                clicker.ClickerDebug.log( "Rows: " + cells[ x ].length );

                for ( let y:number = 0; y < cells[ x ].length; ++y )
                {
                    cells[ x ][ y ] = {
                        key:          0,
                        color:        clicker.ClickerCellManager.getRandomColor( this.props.numberOfColors ),
                        className:    "clickerCell",
                        debugCaption: null,
                        onClick:      null,
                        onMouseEnter: null,
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

            // TODO ASK better way to solve this nightmare?
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
                                        onClick={      (event:MouseEvent) => { staticThis.onCellClick(      event, columnId, rowId ); } }
                                        onMouseEnter={ () => { staticThis.onCellMouseEnter( columnId, rowId ); } }
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
        *   @param event The mouse event being invoked.
        *   @param x     The x coordinatie of the cell that has been clicked.
        *   @param y     The y coordinatie of the cell that has been clicked.
        ***************************************************************************************************************/
        private onCellClick( event:MouseEvent, x:number, y:number ) : void
        {
            clicker.ClickerDebug.log( "onCellClick [" + x + "][" + y + "]" );

            this.unhoverAllCells();

            let affectedCellCoordinates:clicker.ClickerCellCoordinate[] = clicker.ClickerCellManager.getAffectedCellCoordinates
            (
                this.state.cells,
                x,
                y
            );

            // clicking clear cells has no effect
            if ( affectedCellCoordinates.length == 0 )
            {
                clicker.ClickerDebug.log( "Clicked a clear cell" );
                return;
            }

            // at least two cells must be affected to clear
            if ( affectedCellCoordinates.length < 2 )
            {
                clicker.ClickerDebug.log( "Single cell not affected" );
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

            // save mouse event
            clicker.ClickerBoard.lastMouseClickX = event.clientX;
            clicker.ClickerBoard.lastMouseClickY = event.clientY;

            // check board clear
            if ( clicker.ClickerCellManager.checkBoardClear( newCells ) )
            {
                clicker.ClickerInfo.singleton.showMessage( "Congrats! You solved the game!" );
            }

            // assign all new cells
            this.setState(
                {
                    cells: newCells,
                }
            );
        }

        public componentDidUpdate()
        {
            // get element under mouse
            this.triggerOnMouseEnterForDivUnderMouse();
        }

        /***************************************************************************************************************
        *   Being invoked when the mouse enters a cell on the board.
        *
        *   @param x The x coordinatie of the cell that has been entered.
        *   @param y The y coordinatie of the cell that has been entered.
        ***************************************************************************************************************/
        private onCellMouseEnter( x:number, y:number ) : void
        {
            clicker.ClickerDebug.log( "onCellMouseEnter [" + x + "][" + y + "]" );

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

            if ( clicker.ClickerBoard.currentHoveringCells == null || clicker.ClickerBoard.currentHoveringCells.length < 2 )
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

        /***************************************************************************************************************
        *   Triggers an onMouseEnter event for the div that is located under the mouse cursor.
        ***************************************************************************************************************/
        private triggerOnMouseEnterForDivUnderMouse()
        {
            if ( clicker.ClickerBoard.lastMouseClickX == -1 || clicker.ClickerBoard.lastMouseClickY == -1 )
            {
                return;
            }

            let elementMouseIsOver:Element = document.elementFromPoint
            (
                clicker.ClickerBoard.lastMouseClickX,
                clicker.ClickerBoard.lastMouseClickY
            );

            clicker.ClickerBoard.lastMouseClickX = -1;
            clicker.ClickerBoard.lastMouseClickY = -1;

            if ( elementMouseIsOver != null && elementMouseIsOver instanceof HTMLDivElement )
            {
                let divMouseIsOver:HTMLDivElement = elementMouseIsOver as HTMLDivElement;
                let splits:string[] = divMouseIsOver.innerHTML.split( "," );

                let cellX:number = parseInt( splits[ 0 ] );
                let cellY:number = parseInt( splits[ 1 ] );

                clicker.ClickerDebug.log( "mouse over div [" + cellX + "][" + cellY + "]" );

                this.onCellMouseEnter( cellX, cellY );
            }
        }
    }
