import React, { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from "./NavBar";
import Home from "./Home";
import Guide from "./Guide";
import Quiz from "./Quiz";
import Questions from "./Questions";


function App() {
  const [questions, setQuestions] = useState([]);
  
    // Add useEffect hook
    useEffect(() => {
      fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy")
        .then((r) => r.json())
        .then((data) => {
          setQuestions(data.results);
        });
    }, []);

  return (
    <div className="App">
      
      <NavBar />
      <Routes> 
          <Route exact='true' path='/' element={<Home />} ></Route>
          <Route exact='true' path='/home' element={<Home />} ></Route>
          <Route exact='true' path='/guide' element={ <Guide />} ></Route>
          <Route exact='true' path='/quiz' element={ <Quiz questions={questions}/>} ></Route>
          <Route path='/questions' element={ <Questions questions={questions} />} ></Route>
      </Routes>
    </div>
  );
}

export default App;




/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
*/
