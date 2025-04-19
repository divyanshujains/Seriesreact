import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Allquote from './components/Allquote';
import Navbar from './components/Navbar';
import Liked from './components/Liked';

const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/allquote' element={<Allquote />} />
            <Route path='/Liked' element={<Liked />} />
        </Routes>
    </div>
  )
}

export default App