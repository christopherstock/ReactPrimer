
    import * as React   from 'react';
    import * as clicker from '../clicker';

    /*******************************************************************************************************************
    *   Represents the 'clicker' information panel.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ClickerInfo extends React.Component<null, clicker.ClickerInfoState>
    {
        /** The singleton instance of this class. */
        public          static          singleton               :clicker.ClickerInfo                    = null;

        /***************************************************************************************************************
        *   Creates a new clicker information panel.
        ***************************************************************************************************************/
        public constructor()
        {
            super();

            this.state =
            {
                message:   "",
                className: "clickerInfoHidden",
            };
        }

        /***************************************************************************************************************
        *   Renders the 'clicker' board component.
        *
        *   @return The rendered Board.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            clicker.ClickerDebug.log( "render ClickerInfo" );

            return <div className={ this.state.className }>
                { this.state.message }
            </div>;
        }

        /***************************************************************************************************************
        *   Being invoked when this component did mount.
        ***************************************************************************************************************/
        public componentDidMount() : void
        {
            clicker.ClickerInfo.singleton = this;
        }

        /***************************************************************************************************************
        *   Updates the component and shows the given message.
        ***************************************************************************************************************/
        public showMessage( msg:string ) : void
        {
            clicker.ClickerDebug.log( "Show message [" + msg + "]" );

            this.setState
            (
                {
                    message:   msg,
                    className: "clickerInfo",
                }
            );
        }
    }
