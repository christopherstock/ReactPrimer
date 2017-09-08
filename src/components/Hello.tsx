
    import * as React from 'react';
    import * as rp    from '../rp';

    /*******************************************************************************************************************
    *   'HelloProps' describes the shape of props. State is never set so we use the 'undefined' type.
    *******************************************************************************************************************/
    export class Hello extends React.Component<rp.HelloProps, undefined>
    {
        /***************************************************************************************************************
        *   Renders this component.
        ***************************************************************************************************************/
        render()
        {
            return <h1>Hello from {this.props.compiler}<br/>and from the {this.props.framework}!</h1>;
        }
    }
