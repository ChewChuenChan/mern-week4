import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [state,setState] = useState([]);

  useEffect (() =>{
    console.log ("use Effect running");

      axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then((response)=> {
        console.log(response.data.results);
        setState(response.data.results);
      })
      .catch((err)=> console.log(err));
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
