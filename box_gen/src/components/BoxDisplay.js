import React, { useState } from 'react';

const BoxDisplay = props => {
    
    console.log(props.colortype)
    const listitem = props.colortype;
    console.log(listitem);
    // const listsize = props.sizetype;

    return (
        <div>
            <h1>Boxes:</h1>
            {listitem}
            {
            listitem.map( (item, i) =>
                <div key={i} style={{ 
                    backgroundColor : String( item ),
                    width : '100px',
                    height : '100px',
                    marginLeft : '10px',
                    display: 'inline-block',
                    verticalAlign: 'top',
                    }}/>
            )}
        </div>
    )
}

export default BoxDisplay;
{/* <div style={{ 
    backgroundColor : String(props.colortype),
    width : '100px',
    height : '100px',
    marginLeft : '10px'
    }}/> */}