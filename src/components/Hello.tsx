
    import * as React from 'react';

    /***********************************************************************************************************************
    *   The interface that specifies the compiler and the framework .. ?
    *
    *   TODO extract to single file!
    ***********************************************************************************************************************/
    export interface HelloProps
    {
        /** The first test value. */
        compiler    :string;
        /** The second test value. */
        framework   :string;
    }

    /***********************************************************************************************************************
    *   'HelloProps' describes the shape of props. State is never set so we use the 'undefined' type.
    ***********************************************************************************************************************/
    export class Hello extends React.Component<HelloProps, undefined>
    {
        /*******************************************************************************************************************
        *   Renders this component.
        *******************************************************************************************************************/
        render()
        {
            return <h1>Hello from {this.props.compiler}<br/>and from the {this.props.framework}!</h1>;
        }
    }
