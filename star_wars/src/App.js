import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

import Search from './components/Search';
import Display from './components/Display';

import {Router,Link} from '@reach/router';

function App() {
  const [search, setSearch] = useState({
    search_type:'',
    id:''
  })

  // const typename = 'person';
  // const typenumber = 5;

  const changehandler = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="App">
      <Search changehandler={changehandler}/>
      <Link to={`/${search.search_type}/${search.id}`}>Link here</Link>
      <Router>
        <Display path="/:word/:num"/>
      </Router>
    </div>
  );
}

export default App;