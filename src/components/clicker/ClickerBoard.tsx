
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

            // TODO extract to createField()

            let fields:number[][] = new Array<Array<number>>( this.props.fieldSizeX );
            console.log( "Columns: " + fields.length );

            let fieldId:number = 0;

            for ( let i:number = 0; i < fields.length; ++i )
            {
                fields[ i ] = new Array<number>( this.props.fieldSizeY );
                console.log( "Rows: " + fields[i].length );

                for ( let j:number = 0; j < fields[i].length; ++j )
                {
                    fields[ i ][ j ] = fieldId++;
                }
            }

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

            // TODO enumeration for all possible field values


            return <div className="clickerBoard">
                { this.renderBoard() }
            </div>;
        }

        /***************************************************************************************************************
        *   Renders the gamefield into an one-dimensional JSX element array so it can be rendered.
        *
        *   @return The All fields of the board in a streamed 1d array of JSX elements.
        ***************************************************************************************************************/
        private renderBoard() : JSX.Element[]
        {
            let thisInstance:ClickerBoard = this;

            return this.state.fields.map
            (
                function( m:number[] )
                {
                    return <div className="clickerColumn">
                        {
                            m.map
                            (
                                function( n:number )
                                {
                                    return <div className="clickerField" onClick={ () => thisInstance.onFieldClicked( n ) }>
                                        { ">" + n + "<" }
                                    </div>;
                                }
                            )
                        }
                    </div>;
                }
            )
        }

        /***************************************************************************************************************
        *   Being invoked when a field of the board is clicked.
        *
        *   @param id The id of the field that has been clicked.
        ***************************************************************************************************************/
        private onFieldClicked=( id:number )=>
        {
            console.log( "onFieldClicked" );
            console.dir( id );



        }
    }
