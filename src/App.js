import './App.css';
import React, { useState } from 'react';

function App() {

const [count, setCount] = useState(0);
function increment() {
  // setCount(count + 1);
  setCount(prevCount => prevCount + 1);
}function decrement() {
  // setCount(count - 1);
  setCount(prevCount=> prevCount - 1);
}


  return (
    <div className="App">
     <button onClick={decrement}>-</button>
     <span>{count}</span>
     <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
