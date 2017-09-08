
    import * as React from 'react';
    import * as rp    from '../../rp';

    /*******************************************************************************************************************
    *   Represents a Square of the Tic Tac Toe board.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class Square extends React.Component
    {
        /***************************************************************************************************************
        *   Renders this component.
        *
        *   @return The rendered React element.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            return (
                <button className="square">
                {/* TODO */}
                </button>
            );
        }

        /***************************************************************************************************************
        *   Renders the current square field.
        *
        *   @param i The id if the square field to render.
        *
        *   @return The rendered React element.
        ***************************************************************************************************************/
        public static renderSquare( i:any )
        {
            return <Square />;
        }
    }
