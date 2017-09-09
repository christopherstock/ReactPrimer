
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

            let columns:Array<Array<JSX.Element>> = new Array<Array<JSX.Element>>( this.props.fieldSizeX );
            console.log( "Columns length: " + columns.length );

            for ( let column of columns )
            {
                column = new Array<JSX.Element>( this.props.fieldSizeY );
                console.log( " Row length: " + column.length );

                for ( let cell of column )
                {
                    cell = <div>Fucker!</div>
                }
            }

            let testers = [ "Test1", "Test2", "Test3", "Test4", "Test5",  ];

            return <div>
                { acclaim  }
                { headline }
                {
                    testers.map(
                        function( n )
                        {
                            return <p key={n}>{n}</p>
                        }
                    )
                }
                {
                    columns.map(
                        function( n )
                        {
                            return <div>muuh</div>
                        }
                    )
                }
            </div>;
        }
    }
