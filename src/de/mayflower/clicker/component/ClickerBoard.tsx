
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
                        parentBoard:    thisStatic,
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
                                        parentBoard={    thisStatic     }
                                        parentCallback={ () => { thisStatic.onCellClicked( n.x, n.y ); }   }
                                    />
                                }
                            )
                        }
                    </div>;
                }
            )
        }

        private onCellClicked( x:number, y:number )
        {
            console.log( "onCellClicked [" + x + "][" + y + "]" );

            // let key:number = clicker.ClickerMath.getRandomInt( 10000, 50000 );

            let newClickerCell:clicker.ClickerCellProps = {
                x:              x,
                y:              y,
                key:            clicker.Clicker.currentCellIndex++,
                initialColor:   clicker.ClickerFieldState.COLOR_ORANGE,
                parentBoard:    this.state.fields[ x ][ y ].parentBoard,
                parentCallback: this.state.fields[ x ][ y ].parentCallback,
            };

            // TODO implement deep cloning for second array dimension .. no progress! :(
            let newFields:clicker.ClickerCellProps[][] = this.deepCloneFieldsArray( this.state.fields );



            newFields[ x ][ y ] = newClickerCell;

            this.setState(
                {
                    fields: newFields,
                }
            );
        }

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
    }
