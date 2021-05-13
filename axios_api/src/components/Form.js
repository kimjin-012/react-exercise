import React, { useState } from 'react';
import axios from 'axios';

const Form = props => {
    const [pokemon, setpokemon] = useState([]);
    const [nodata, setnodata] = useState(true);

    const fetchpokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(response => {
            console.log(response);
            return response.data.count;
            // setpokemon(response.data.results);
            // console.log(response.data.results);
            // setnodata(false);
        })
        .then(response => axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${response}`))
        .then(response => {
            setpokemon(response.data.results);
            setnodata(false);
        })
        .catch(err => setnodata(true));
        console.log(pokemon);
    }

    return (
        <div>
            <button onClick={fetchpokemon}>Fetch Pokemon names</button>
            {
                nodata?
                <p>No pokemon yet, push the button first</p>
                :
                pokemon.map( (pokemon, index) =>
                    <p key={index}>{pokemon.name}</p>
                )
            }
        </div>
    )
}

export default Form;