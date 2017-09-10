
    import * as React from 'react';
    import * as rp    from '../../rp';

    /*******************************************************************************************************************
    *   TODO ASAP Enumeration for all field states.
    *
    *   Represents the 'clicker' game.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class Main extends React.Component<rp.MainProps, rp.MainState>
    {
        /***************************************************************************************************************
        *   Renders the 'clicker' main game component.
        *
        *   @return The rendered React element.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            let acclaim:JSX.Element  = <h1>Welcome { this.props.playerName }</h1>;
            let headline:JSX.Element = <h2>Your board is { this.props.fieldSizeX } x { this.props.fieldSizeY }</h2>;

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
                { acclaim  }
                { headline }
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
