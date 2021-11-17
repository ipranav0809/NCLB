import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import NavBar from "./components/NavBar";

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';



function App() {

  
  return (
    <Router>
    <div className="App">

    <NavBar/>

    </div>
    </Router>

  )
};

export default App;
