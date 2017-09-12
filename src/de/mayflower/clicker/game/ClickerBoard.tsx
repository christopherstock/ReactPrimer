
    import * as React   from 'react';
    import * as clicker from '../clicker';
    import {HTMLAttributes} from "react";

    /*******************************************************************************************************************
    *   Represents the 'clicker' game board.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ClickerBoard extends React.Component<clicker.ClickerBoardProps, clicker.ClickerBoardState>
    {
        /***************************************************************************************************************
        *   Creates a new clicker board.
        ***************************************************************************************************************/
        public constructor( props:clicker.ClickerBoardProps )
        {
            super( props );

            let fields:clicker.ClickerField[][] = this.createEmptyBoard();

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

            return <div className="clickerBoard">
                { this.renderFields() }
            </div>;
        }

        /***************************************************************************************************************
        *   Creates an empty board represented by an empty 2d array of the desired size.
        *
        *   @return The 2d array that represents all board fields.
        ***************************************************************************************************************/
        private createEmptyBoard() : clicker.ClickerField[][]
        {
            let fields:clicker.ClickerField[][] = new Array<Array<clicker.ClickerField>>( this.props.fieldSizeX );
            console.log( "Columns: " + fields.length );

            for ( let i:number = 0; i < fields.length; ++i )
            {
                fields[ i ] = new Array<clicker.ClickerField>( this.props.fieldSizeY );
                console.log( "Rows: " + fields[ i ].length );

                for ( let j:number = 0; j < fields[ i ].length; ++j )
                {
                    fields[ i ][ j ] = new clicker.ClickerField
                    (
                        {
                            x:     i,
                            y:     j,
                            color: "#ffff00",
                        }
                    );
                }
            }

            return fields;
        }

        /***************************************************************************************************************
        *   Renders the gamefield into an one-dimensional JSX element array so it can be rendered.
        *
        *   @return The All fields of the board in a streamed 1d array of JSX elements.
        ***************************************************************************************************************/
        private renderFields() : JSX.Element[]
        {
            let thisInstance:ClickerBoard = this;

            return this.state.fields.map
            (
                function( m:clicker.ClickerField[] )
                {
                    return <div className="clickerColumn">
                        {
                            m.map
                            (
                                function( n:clicker.ClickerField )
                                {
                                    return <div
                                        className="clickerField"
                                        onClick={ () => thisInstance.onFieldClicked( n ) }
                                        style={ { backgroundColor: n.props.color } }
                                    >
                                        { ">" + n.props.x + "<>" + n.props.y + "<" }
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
        *   @param field The id of the field that has been clicked.
        ***************************************************************************************************************/
        private onFieldClicked=( field:clicker.ClickerField )=>
        {
            console.log( "onFieldClicked [" + field.props.x + "][" + field.props.y + "]" );

/*
            let newFields:number[][] = this.state.fields.slice();

            newFields[ 1 ][ 3 ] = 99999999;

            // forces rerendering the board
            this.setState
            (
                {
                    fields: newFields
                }
            );
*/
        }
    }
