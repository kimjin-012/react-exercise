import React, { useState } from 'react';

const Form = props => {
    const [title, settitle] = useState('');

    const formsubmit = e => {
        e.preventDefault();
        props.taskoutput(title);
    }

    return(
        <div onSubmit={formsubmit}>
            <h1>What is your task?</h1>
            <form>
                <input type="text" name="task" onChange={ e => settitle(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Form;