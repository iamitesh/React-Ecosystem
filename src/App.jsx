import { useState } from 'react'

import './App.css'
import Todo from './components/Todo/Todo';

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  return (
    <>
      <Todo />
    </>
  )
}

export default App
