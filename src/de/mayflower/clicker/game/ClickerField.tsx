
    import * as React   from 'react';
    import * as clicker from '../clicker';

    /*******************************************************************************************************************
    *   Represents a field of the 'clicker' game board.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ClickerField extends React.Component<clicker.ClickerFieldProps, clicker.ClickerFieldState>
    {
        /***************************************************************************************************************
        *   Creates a new 'clicker' field component.
        ***************************************************************************************************************/
        public constructor( props:clicker.ClickerFieldProps )
        {
            super( props );

            // assign state directly
            this.state =
            {
                color: "#ffb05d"
            };
        }

        /***************************************************************************************************************
        *   Renders the 'clicker' board component.
        *
        *   @return The rendered Board.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            return <div
                className="clickerField"
                onClick={ () => this.onFieldClicked() }
                style={ { backgroundColor: this.state.color } }
            >
                { this.props.x + ", " + this.props.y }
            </div>;
        }

        /***************************************************************************************************************
        *   Being invoked when a field of the board is clicked.
        ***************************************************************************************************************/
        private onFieldClicked=()=>
        {
            console.log( "onFieldClicked [" + this.props.x + "][" + this.props.y + "]" );

            this.setState
            (
                {
                    color: "#ff0000",
                }
            );
        }
    }
