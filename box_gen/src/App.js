import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

import BoxGenerator from './components/BoxGenerator';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [currentcolor, setcurrentcolor] = useState([]);
  // const [currentsize, setcurrentsize] = useState([]);

  const confirmcolor = e => {
    setcurrentcolor([...currentcolor, e]);
    if(currentcolor.length >= 3){
      // setcurrentcolor(currentcolor.pop());
      console.log('numbers are high');
    }
  }
  // const confirmsize = e => {
  //   setcurrentsize([...currentsize, e]);
  // }

  console.log(currentcolor);
  console.log(currentcolor.length);

  return (
    <div className="App">
      <BoxGenerator boxoutput={ confirmcolor }/>
      <BoxDisplay colortype={ currentcolor }/>
    </div>
  );
}

export default App;
