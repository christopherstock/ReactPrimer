
    import * as React from 'react';
    import * as rp    from '../../rp';

    /*******************************************************************************************************************
    *   Represents the 'clicker' game board.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ClickerBoard extends React.Component<rp.ClickerBoardProps, rp.ClickerBoardState>
    {
        /***************************************************************************************************************
        *   Renders the 'clicker' board component.
        *
        *   @return The rendered Board.
        ***************************************************************************************************************/
        public constructor( props:rp.ClickerBoardProps )
        {
            super( props );




        }

        /***************************************************************************************************************
        *   Renders the 'clicker' board component.
        *
        *   @return The rendered Board.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            console.log( "render ClickerBoard" );

            // TODO fields should not be of type JSX.Element but of type number !!

            // TODO enumeration for all possible field values

            let fields:JSX.Element[][] = new Array<Array<JSX.Element>>( this.props.fieldSizeX );
            console.log( "Columns: " + fields.length );

            let fieldId:number = 0;

            for ( let i:number = 0; i < fields.length; ++i )
            {
                fields[ i ] = new Array<JSX.Element>( this.props.fieldSizeY );
                console.log( "Rows: " + fields[i].length );

                for ( let j:number = 0; j < fields[i].length; ++j )
                {
                    fields[ i ][ j ] = <div>{ fieldId++ }</div>;
                }
            }



            return <div className="clickerBoard">
                { this.renderBoard( fields ) }
            </div>;
        }

        /***************************************************************************************************************
        *   Renders the gamefield into an one-dimensional JSX element array so it can be rendered.
        *
        *   @param fields All fields of the board in a 2d array.
        *
        *   @return The All fields of the board in a streamed 1d array.
        ***************************************************************************************************************/
        private renderBoard( fields:JSX.Element[][] ) : JSX.Element[]
        {
            return fields.map
            (
                function( m )
                {
                    return <div className="clickerColumn">
                        {
                            m.map
                            (
                                function( n )
                                {
                                    return <div className="clickerField">{ n }</div>;
                                }
                            )
                        }
                    </div>;
                }
            )
        }
    }
