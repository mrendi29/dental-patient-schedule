// Dependencies
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


// Styling Imports
import './App.css';

// General Component Imports
import Landing from './components/general/Landing'
import Login from './components/general/Login'
import Register from './components/general/Register'
import Dashboard from './components/general/Dashboard'

const App = () => {
  return(
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Landing/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
