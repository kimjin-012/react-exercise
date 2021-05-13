import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Display = props => {
    const [info, setinfo] = useState({})

    useEffect(() => {
        console.log(props.word);
        console.log(props.num)
        axios.get(`https://swapi.dev/api/${props.word}/${props.num}`)
        .then((response) => {
            setinfo(response.data);
        })
        .catch(err => console.log(err));
    }, []);

    return(
        <div>
            <h2>{info.name}</h2>
            <p>Height: {info.height}</p>
            <p>Mass: {info.mass}</p>
            <p>Hair Color: {info.hair_color}</p>
            <p>Skin Color: {info.skin_color}</p>
        </div>
    )
}

export default Display;