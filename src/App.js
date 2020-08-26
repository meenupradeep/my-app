import React from 'react';

import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Pizza Corner</h1>
      </div>
      <header className="App-header">  
        <Counter /> 
      </header>
    </div>
  );
}

export default App;
