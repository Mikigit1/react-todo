import React from 'react';
import Todo from './components/Todo';
import './App.css';


function App() {
  return (
    <div className="App">
      <main className="App-main">
        <div className="App-contents">
          <Todo />
        </div>
      </main>
    </div>
  );
}

export default App;
