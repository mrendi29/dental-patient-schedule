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
import Profile from './components/general/Profile';
import Book from './components/rigged/Book';
import Message from './components/rigged/Message';
import Calandar from './components/rigged/Calendar';
import Setting from './components/rigged/Setting';


const App = () => {
  return(
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Landing/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/dashboard' element={<Dashboard/>} />
          {/* <Route exact path='profile' element={<Profile/>} /> */}
        <Route exact path='/book' element={<Book/>} />
        <Route exact path='/message' element={<Message/>} />
        <Route exact path='/calandar' element={<Calandar/>} />
        <Route exact path='/setting' element={<Setting/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
