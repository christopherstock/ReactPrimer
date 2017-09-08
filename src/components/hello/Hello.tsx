
    import * as React from 'react';
    import * as rp    from '../../rp';

    /*******************************************************************************************************************
    *   This components renders a H1 that contains a HELLO REACT string.
    *
    *   The properties are set with the interface HelloProps.
    *   State is never set so we use the 'undefined' type.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class Hello extends React.Component<rp.HelloProps, null>
    {
        /***************************************************************************************************************
        *   Renders this component.
        *
        *   @return The rendered React element.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            return <h1>Hello from {this.props.compiler}<br/>and from the {this.props.framework}!</h1>;
        }
    }
