
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
        public render() : JSX.Element
        {
            console.log( "render ClickerBoard" );


            // TODO turn into array[][] ?
            let fields:Array<Array<JSX.Element>> = new Array<Array<JSX.Element>>( this.props.fieldSizeX );
            console.log( "Columns length: " + fields.length );

            for ( let i:number = 0; i < fields.length; ++i )
            {
                fields[i] = new Array<JSX.Element>( this.props.fieldSizeY );
                console.log( " Row length: " + fields[i].length );

                for ( let j:number = 0; j < fields[i].length; ++j )
                {
                    fields[ i ][ j ] = <div>Fucker!</div>;
                }
            }



            return <div className="clickerBoard">
                { this.renderBoard( fields ) }
            </div>;
        }

        private renderBoard( fields:Array<Array<JSX.Element>> ) : JSX.Element[]
        {
            return fields.map(
                function( n )
                {
                    return <div className="clickerColumn">
                        {
                            n.map
                            (
                                function( n )
                                {
                                    return <div className="clickerField">Muuh!</div>;
                                }
                            )
                        }
                    </div>;
                }
            )
        }
    }
