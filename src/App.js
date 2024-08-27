import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [responseType, setResponseType] = useState();
  const [items, setItems] = useState([]);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${responseType}`)
    .then(response => response.json())
    .then(json => setItems(json))
  },[responseType])

  return (
    <>
      <div className="App">
        <button onClick={()=>setResponseType("users")}>Users</button>
        <button onClick={()=>setResponseType("posts")}>Post</button>
        <button onClick={()=>setResponseType("comments")}>Comment</button>
        <h1>{responseType}</h1>
      </div>
      {items.map(item  => {
        return <pre>{JSON.stringify(item)}</pre>})}
    </>
    
  );
}

export default App;
