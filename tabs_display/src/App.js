import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

import TabGenerator from './components/TabGenerator';
import TabDisplay from './components/TabDisplay';

function App() {
  const [content, setcontent] = useState(0);

  const confirmcontent = (e, data) => {
    e.preventDefault();
    console.log(data);
    setcontent(data);
    console.log('the content array is: ' + content);
  }

  return (
    <div className="App">
      <TabGenerator contents={ confirmcontent }/>
      <TabDisplay displayitem={ content }/>
    </div>
  );
}

export default App;
