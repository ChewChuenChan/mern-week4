import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import Word from "./components/Word";
    

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:word" element={<Word />} />
        <Route path="/:word/:color/:bgCol" element={<Word />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
    
export default App
