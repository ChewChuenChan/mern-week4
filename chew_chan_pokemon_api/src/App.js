import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [state,setState] = useState([]);

  useEffect (() =>{
    console.log ("use Effect running");
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => {
        return response.json()
      })
      .then(response=>{
        setState(response.results)
      })
      .catch ((error)=>{
        console.log (error)
      })

  },[]);

  return (
    <div className="App">
      <h1>Fetch pokemon</h1>
      {
        state.map((obj,index) =>{
          return (
            <ul key={index}>
              <li>{obj.name}</li>
            </ul>
          )
        })
      }
    </div>
  );
}

export default App;
