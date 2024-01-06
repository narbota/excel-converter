import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App" style={{backgroundColor: 'teal', color: 'white'}}>
      
      <h1>Hello, World! This is the excel uploader</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <button onClick={()=> alert('Click me for some stuff!')}>Click me for your excel files</button>
    </div>
  );
}

export default App;
