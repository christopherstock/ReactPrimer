
    import * as React from 'react';
    import * as rp    from '../../rp';

    /*******************************************************************************************************************
    *   Represents a Square of the Tic Tac Toe board.
    *
    *   Though Square is fully controlled by the Board class,
    *   Square is specified as a "controlled component".
    *
    *   This class could also be turned into a "functional component" by turning
    *   the class body into a sole function. .. but of course we don't want that in our TypeScript code!
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class Square extends React.Component<rp.SquareProps, any>
    {
        /***************************************************************************************************************
        *   Creates a new square element.
        *
        *   @param props The properties for this square element.
        ***************************************************************************************************************/
        public constructor( props:rp.SquareProps )
        {
            super( props );

            console.log( "Square.constructor()" );
        }

        /***************************************************************************************************************
        *   Renders this component.
        *
        *   @return The rendered React element.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            console.log( "Square.render()" );

            return (
                <button
                    className="square"
                    value={   this.props.value   }
                    onClick={ this.props.onClick }
                >
                    { this.props.value }
                </button>
            );
        }
    }
