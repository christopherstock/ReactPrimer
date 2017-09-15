
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

            let fields:clicker.ClickerCellProps[][] = this.createEmptyBoard();

            // assign state directly
            this.state =
            {
                fields: fields,
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
            let fields:clicker.ClickerCellProps[][] = new Array<Array<clicker.ClickerCellProps>>( this.props.fieldSizeX );
            console.log( "Columns: " + fields.length );

            // TODO required?
            let thisStatic:clicker.ClickerBoard = this;

            for ( let x:number = 0; x < fields.length; ++x )
            {
                fields[ x ] = new Array<clicker.ClickerCellProps>( this.props.fieldSizeY );
                console.log( "Rows: " + fields[ x ].length );

                for ( let y:number = 0; y < fields[ x ].length; ++y )
                {
                    fields[ x ][ y ] = {
                        x:              x,
                        y:              y,
                        key:            clicker.Clicker.currentCellIndex++,
                        initialColor:   clicker.ClickerFieldStateManager.getRandomColor(),
                        parentCallback: () => { thisStatic.onCellClicked( x, y ); },
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

            // TODO required?
            let thisStatic:clicker.ClickerBoard = this;

            return this.state.fields.map
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
                                        x={              n.x            }
                                        y={              n.y            }
                                        key={            n.key          }
                                        initialColor={   n.initialColor }
                                        parentCallback={ () => { thisStatic.onCellClicked( n.x, n.y ); }   }
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

            // clone the old 2d field array from state
            let newFields:clicker.ClickerCellProps[][] = this.deepCloneFieldsArray( this.state.fields );

            this.setNewCellColor( newFields, x, y, clicker.ClickerFieldState.COLOR_ORANGE );

            // reassign state
            this.setState(
                {
                    fields: newFields,
                }
            );
        }

        /***************************************************************************************************************
        *   Clones all element of the given 2d array and returns the clone.
        *
        *   @param oldFields The 2d array of clicker field props.
        *
        *   @return A cloned instance of the 2d array.
        ***************************************************************************************************************/
        private deepCloneFieldsArray( oldFields:clicker.ClickerCellProps[][] ) : clicker.ClickerCellProps[][]
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
        private setNewCellColor
        (
            fields:clicker.ClickerCellProps[][],
            x:number,
            y:number,
            newColor:clicker.ClickerFieldState
        )
        {
            fields[ x ][ y ] = {
                x:              x,
                y:              y,
                key:            clicker.Clicker.currentCellIndex++,
                initialColor:   newColor,
                parentCallback: fields[ x ][ y ].parentCallback,
            };
        }
    }
