
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
                        x:              x,
                        y:              y,
                        key:            clicker.Clicker.currentCellIndex++,
                        color:          clicker.ClickerCellManager.getRandomColor(),
                        parentCallback: () => { this.onCellClicked( x, y ); },
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

            return this.state.cellProps.map
            (
                function( m:clicker.ClickerCellProps[] )
                {
                    return <div className="clickerColumn" key={ columnKey++ }>
                        {
                            m.map
                            (
                                function( n:clicker.ClickerCellProps )
                                {
                                    return <clicker.ClickerCell
                                        x={              n.x              }
                                        y={              n.y              }
                                        key={            n.key            }
                                        color={          n.color          }
                                        parentCallback={ n.parentCallback }
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
        *
        *   @return A cloned instance of the 2d array.
        ***************************************************************************************************************/
        private onCellClicked( x:number, y:number )
        {
            console.log( "onCellClicked [" + x + "][" + y + "]" );

            let newCellProps:clicker.ClickerCellProps[][] = clicker.ClickerCellManager.deepCloneFieldsArray(
                this.state.cellProps
            );
            clicker.ClickerCellManager.setNewCellColor( newCellProps, x, y, clicker.ClickerCellColor.COLOR_ORANGE );

            this.setState(
                {
                    cellProps: newCellProps,
                }
            );
        }
    }
