import logo from './logo.svg';
import './App.css';

import Number from './components/Number';
import Home from './components/Home';
import Random from './components/Random';
import { Router } from '@reach/router'

function App() {
  return (
    <div className="App">
      <h1>Beginning Web</h1>
      <Router>
        <Home path="/home"/>
        <Number path="/:num"/>
        <Random path="/:word/:color/:background"/>
      </Router>
    </div>
  );
}

export default App;
