
    private deepCloneFieldsArray( oldFields:clicker.ClickerCellProps[][] ) : clicker.ClickerCellProps[][]
    {
        let newFields = new Array<Array<clicker.ClickerCellProps>>( oldFields.length );

        for ( let x:number = 0; x < newFields.length; ++x )
        {
            newFields[ x ] = new Array<clicker.ClickerCellProps>( oldFields[ x ].length );

            for ( let y:number = 0; y < newFields[ x ].length; ++y )
            {
                newFields[ x ][ y ] = oldFields[ x ][ y ];
            }
        }

        return newFields;
    }
