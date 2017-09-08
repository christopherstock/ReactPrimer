
    import * as React from 'react';
    import * as rp    from '../../rp';

    /*******************************************************************************************************************
    *   Represents a Square of the Tic Tac Toe board.
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
            console.dir( props );

            this.state = {
                value: props.value,
            };
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
                <button className="square" onClick={ this.onClickSquare }>
                    {this.state.value}
                </button>
            );
        }

        /***************************************************************************************************************
        *   Being invoked when a square is clicked.
        ***************************************************************************************************************/
        private onClickSquare=()=>
        {
            console.log( "Square.onClickSquare()" );

            this.setState( { value: 'X' } )
        };
    }
