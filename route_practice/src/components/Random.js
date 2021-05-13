import React, {useState, useEffect} from 'react';

const Random = props => {

    // const backgroundColor = props.background;
    // const textColor = props.color;
    const stylesheet = {
        color: props.color,
        backgroundColor: props.background
    }

    const [whichtext, setwhichtext] = useState('')

    useEffect(() =>{
        if(isNaN(props.word)){
            setwhichtext('The word is:')
        } else {
            setwhichtext('The number is:')
        }
    })

    return(
        <div style={stylesheet}>
            <h1>{whichtext} {props.word}</h1>
        </div>
    )
}

export default Random;