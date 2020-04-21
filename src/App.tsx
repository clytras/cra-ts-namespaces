import React, { useEffect } from 'react';
// Importing namespace People
import { People } from './lib/Person';

import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    // Create a Person object from People namespace
    const person = new People.Person('Tom', 'Hanks');
    person.hello();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
