import './App.css';
import React, { useState } from 'react';

function App() {

const [value, setValue] = useState({count:1000,theme:"orange"});
const count = value.count;
const theme = value.theme;
function increment() {

  // Directly updates the value state with a new value that is one more than the current value of count.
  // setValue(count + 1);
  
  // Updates the count property within the value object while preserving other properties.
  // setValue(prevCount => prevCount + 1);
  
  // Updates the count property within the value object while preserving all other properties.
  setValue(prevValue => {   return { ...prevValue, count: prevValue.count + 1}    })
}function decrement() {

  // Directly updates the value state with a new value that is one more than the current value of count.
  // setValue(count - 1);

  // Updates the count property within the value object while preserving other properties.
  // setValue(prevCount=> prevCount - 1);

  // Updates the count property within the value object while preserving all other properties.
  setValue(prevValue => {   return { ...prevValue, count: prevValue.count - 1}    })
}


  return (
    <div className="App">
     <button onClick={decrement}>-</button>
     <span>{count}</span>
     <span>{theme}</span>
     <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
