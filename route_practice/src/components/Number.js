import React, {useState, useEffect} from 'react';

const Number = props => {
    const [whichtext, setwhichtext] = useState('')

    useEffect(() =>{
        if(isNaN(props.num)){
            setwhichtext('The word is:')
        } else {
            setwhichtext('The number is:')
        }
    })

    return (
        <p>{whichtext} {props.num}</p>
    )
}

export default Number;
