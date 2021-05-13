import React, { useState } from 'react';

const TabDisplay = props => {
    const [thisparagraph, setthisparagraph] = useState('');
    const displayitem = props.displayitem;
    console.log(displayitem);

    const forloop = e => {
        let x = [];
        for(var i = 1; i <= e; i++){
            console.log(i);
            x.push("Tab" + i + "content");
            // x.push(<div onClick={ setthisparagraph('Tab' + {i} + 'contnet')}>Tab{i}</div>)
        }
        console.log(x);
        return x;
    }

    return (
        <div>
            {displayitem}
            {forloop(displayitem).map( (x, i) => 
                <div key={i} onClick={() => setthisparagraph(x)}>Tab{i+1}</div>
            )}
            <div>
                {thisparagraph}
            </div>
        </div>
    )
}

export default TabDisplay;