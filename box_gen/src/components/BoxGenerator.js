import React, { useState } from 'react';

const BoxGenerator = props => {
    const [color, setcolor] = useState('');
    // const [size, setsize] = useState('');

    const formsubmit = e => {
        e.preventDefault();
        props.boxoutput( color );
        // props.boxsize(size);
    }

    return (
        <form onSubmit={formsubmit}>
            <h1>Set Box style</h1>
            <input type="text" name="color" onChange={ e => setcolor(e.target.value)}/>
            {/* <input type="text" name="size" onChange={ e => setsize(e.target.value)}/> */}
            <input type="submit" value="color type"/>
        </form>
    )
}

export default BoxGenerator;