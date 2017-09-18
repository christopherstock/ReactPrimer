
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
                { this.renderAllFields() }
            </div>;
        }

        /***************************************************************************************************************
        *   Creates an empty board represented by an empty 2d array of the desired size.
        *
        *   @return The 2d array that represents all board fields.
        ***************************************************************************************************************/
        private createEmptyBoard() : clicker.ClickerCellProps[][]
        {
            let fields:clicker.ClickerCellProps[][] = new Array<Array<clicker.ClickerCellProps>>( this.props.initialFieldSizeX );
            console.log( "Columns: " + fields.length );

            for ( let x:number = 0; x < fields.length; ++x )
            {
                fields[ x ] = new Array<clicker.ClickerCellProps>( this.props.initialFieldSizeY );
                console.log( "Rows: " + fields[ x ].length );

                for ( let y:number = 0; y < fields[ x ].length; ++y )
                {
                    fields[ x ][ y ] = {
                        key:            clicker.Clicker.currentCellIndex++,
                        color:          clicker.ClickerCellManager.getRandomColor(),
                        parentCallback: null,
                        debugCaption:        null,
                    };
                }
            }

            return fields;
        }

        /***************************************************************************************************************
        *   Renders the gamefield into an one-dimensional JSX element array so it can be rendered.
        *
        *   @return The All fields of the board in a streamed 1d array of JSX elements.
        ***************************************************************************************************************/
        private renderAllFields() : JSX.Element[]
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
        *   @param x The x coordinatie of the field that has been clicked.
        *   @param y The y coordinatie of the field that has been clicked.
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
            let newCellProps:clicker.ClickerCellProps[][] = clicker.ClickerCellManager.deepCloneFieldsArray(
                this.state.cellProps
            );

            // get affected fields
            let affectedCellCoordinates:clicker.ClickerCellCoordinate[] = clicker.ClickerCellManager.getAffectedCellCoordinates
            (
                newCellProps,
                x,
                y
            );
            console.log( "Determined [" + affectedCellCoordinates.length + "] affected cells" );

            // at least two fields must be affected to clear
            if ( affectedCellCoordinates.length < 2 )
            {
                console.log( "Single cell clicked." );
                return;
            }

            // clear all affected fields
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

            // assign all fields
            this.setState(
                {
                    cellProps: newCellProps,
                }
            );
        }
    }
