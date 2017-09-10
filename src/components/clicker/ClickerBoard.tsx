
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

            // TODO fields should not be of type JSX.Element but of type number !!

            // TODO enumeration for all possible field values


            return <div className="clickerBoard">
                { this.renderBoard( this.state.fields ) }
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
            let thisInstance:ClickerBoard = this;

            return fields.map
            (
                function( m:JSX.Element[] )
                {
                    return <div className="clickerColumn">
                        {
                            m.map
                            (
                                function( n:JSX.Element )
                                {
//                                    return <div className="clickerField" onClick={ this.onFieldClicked }>{ n }</div>;
                                    return <div className="clickerField" onClick={ () => thisInstance.onFieldClicked( n ) }>{ n }</div>;
                                }
                            )
                        }
                    </div>;
                }
            )
        }

        private onFieldClicked=( id:JSX.Element )=>
        {
            console.log( "onFieldClicked" );
            console.dir( id );



        }
    }
