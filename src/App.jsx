import { useState } from 'react'
import './App.css'
import Todo from './components/Todo/Todo';
import { Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar.jsx"
import Stopwatch from './components/Stopwatch/Stopwatch.jsx';
import DigitalClock from './components/DigitalClock/DigitalClock.jsx';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Todo/>} />
        <Route path='/Stopwatch' element={<Stopwatch/>} />
        <Route path='/DigitalClock' element={<DigitalClock/>} />
      </Routes>
    </>
  )
}

export default App;
