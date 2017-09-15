
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

            let fields:clicker.ClickerCell[][] = this.createEmptyBoard();

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
        private createEmptyBoard() : clicker.ClickerCell[][]
        {
            let fields:clicker.ClickerCell[][] = new Array<Array<clicker.ClickerCell>>( this.props.fieldSizeX );
            console.log( "Columns: " + fields.length );

            let thisStatic:clicker.ClickerBoard = this;

            let key:number = 0;
            for ( let x:number = 0; x < fields.length; ++x )
            {
                fields[ x ] = new Array<clicker.ClickerCell>( this.props.fieldSizeY );
                console.log( "Rows: " + fields[ x ].length );

                for ( let y:number = 0; y < fields[ x ].length; ++y )
                {
                    fields[ x ][ y ] = new clicker.ClickerCell
                    (
                        // TODO prune this duplicate!?

                        {
                            x:              x,
                            y:              y,
                            key:            key++,
                            initialColor:   clicker.ClickerFieldStateManager.getRandomColor(),
                            parentBoard:    this,
                            parentCallback: () => { thisStatic.onCellClicked( x, y ); },
                        }
                    );
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
                function( m:clicker.ClickerCell[] )
                {
                    return <div className="clickerColumn" key={ columnKey++ }>
                        {
                            m.map
                            (
                                function( n:clicker.ClickerCell )
                                {
                                    return <clicker.ClickerCell
                                        x={              n.props.x            }
                                        y={              n.props.y            }
                                        key={            n.props.key          }
                                        initialColor={   n.props.initialColor }
                                        parentBoard={    this                 }
                                        parentCallback={ () => { thisStatic.onCellClicked( n.props.x, n.props.y ); }   }
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

            let newClickerCell:clicker.ClickerCell = new clicker.ClickerCell(
                {
                    x:              x,
                    y:              y,
                    key:            this.state.fields[ x ][ y ].props.key,
                    initialColor:   clicker.ClickerFieldState.COLOR_ORANGE,
                    parentBoard:    this.state.fields[ x ][ y ].props.parentBoard,
                    parentCallback: this.state.fields[ x ][ y ].props.parentCallback,
                }
            );

            // TODO implement deep cloning for second array dimension!
            let newFields:clicker.ClickerCell[][] = this.state.fields;

            newFields[ x - 1 ][ y - 1 ] = newClickerCell;

            this.setState(
                {
                    fields: newFields,
                }
            );
        }
    }
