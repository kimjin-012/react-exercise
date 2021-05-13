import logo from './logo.svg';
import './App.css';
import React from 'react'

import PersonCard from './components/PersonCard';

function App() {          
      return (
        <div className="App">
          <PersonCard/>
        </div>
      );    
    }
    
    export default App;
    
    /* <PersonCard value={"Smith", "John", 88, 'Brown'}/>
    <PersonCard value={"Fillmore", "Millard", 50, 'Brown'}/>
    <PersonCard value={"Smith", "Maria", 62, 'Brown'}/> */


    // <PersonCard firstname="Doe" lastname="Jane" age={45} color="Black"/>
    // <PersonCard firstname="Smith" lastname="John" age={88} color="Brown"/>