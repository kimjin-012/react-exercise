import React, { useState } from 'react';

const FormDisplay = props => {
    const listtask = props.tasklist;
    console.log(listtask);
    return(
        <div>
            <ul>
                {listtask.map((task, i) =>
                <>
                    <li key={i}>{task}</li>
                    {/* <form onSubmit={}>
                        <input type="hidden" name="taskremove" value="task"/>
                        <input type="submit" value="removetask"/>
                    </form> */}
                </>
                )}
            </ul>
        </div>
    )
}

export default FormDisplay;