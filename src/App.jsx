import { useState } from 'react'

import './App.css'

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  return (
    <>
      <h1>My Todos</h1>
      <div className='todo-wrapper'>
        <div className='todo-input'>
          <div className='todo-list-item'>
            <label>Title</label>
            <input type='text' placeholder='What is the task Title' />
          </div>
          <div className='todo-list-item'>
            <label>Description</label>
            <input type='text' placeholder='What is the task Description' />
          </div>
          <div className='todo-list-item'>

            <button className='primaryBtn'>Add</button>
          </div>
        </div>

        <div className='btn-area'>
          <button className={`secBtn  ${isCompleteScreen===false && 'active'}`} onClick={()=>setIsCompletedScreen(false)}>Todo</button>
          <button className={`secBtn   ${isCompleteScreen===true && 'active'}`} onClick={()=>setIsCompletedScreen(true)}>Completed</button>
        </div>
        <div className='todo-list'>
          <h3>Task</h3>
          <p>Description</p>

        </div>
      </div>
    </>
  )
}

export default App
