import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/login' element={ <Login /> } />
          <Route path='/signup' element={ <Signup /> } />
          <Route path='/' element={ <Home /> } />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
