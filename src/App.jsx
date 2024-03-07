import { Suspense, lazy } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar.jsx"
const Todo = lazy (() => import('./components/Todo/Todo'));
const Stopwatch = lazy(() => import('./components/Stopwatch/Stopwatch.jsx'));
const DigitalClock = lazy(() => import('./components/DigitalClock/DigitalClock.jsx'));
const PostList = lazy(() => import('./components/PostList/PostList.jsx'));

function App() {
  return (
    <>
      <Navbar />
      <main>
      <Suspense fallback={<div>Loading Components...</div>}>
        <Routes>
          <Route path='/' exact element={<Todo />} />
          <Route path='/Stopwatch' element={<Stopwatch />} />
          <Route path='/DigitalClock' element={<DigitalClock />} />
          <Route path='/PostList' element={<PostList />} />
        </Routes>
      </Suspense>
      </main>
    </>
  )
}

export default App;
