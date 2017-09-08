
import * as React from 'react';

/***********************************************************************************************************************
*   The interface that specifies the compiler and the framework .. ?
***********************************************************************************************************************/
export interface HelloProps
{
    compiler    :string;
    framework   :string;
}

/***********************************************************************************************************************
*   'HelloProps' describes the shape of props.
*   State is never set so we use the 'undefined' type.
***********************************************************************************************************************/
export class Hello extends React.Component<HelloProps, undefined>
{
    /*******************************************************************************************************************
    *   Renders this component.
    *******************************************************************************************************************/
    render()
    {
        return <h1>Hello from {this.props.compiler} and from the {this.props.framework}!</h1>;
    }
}
