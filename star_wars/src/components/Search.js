import React, {useState, useEffect} from 'react';

const Search = props => {
    const { changehandler } = props;

    return(
        <div>
            <form>
                <select name="search_type" id="search_type" onChange={ changehandler }>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                </select>
                <input type="text" name="id" onChange={ changehandler }/>
            </form>
        </div>
    )
}

export default Search;