import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

import Form from './components/Form';
import FormDisplay from './components/FormDisplay';

function App() {
  const [tasks, setTasks] = useState([]);

  const submithandler = e => {
    setTasks([...tasks, e]);
    console.log(tasks);
  }

  return (
    <div className="App">
      <Form taskoutput={submithandler}/>
      <FormDisplay tasklist={tasks}/>
    </div>
  );
}

export default App;
