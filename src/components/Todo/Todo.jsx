import { useEffect, useRef, useState } from 'react'

import './Todo.css'

function Todo() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')


  const todoTitleRef = useRef(null);
  useEffect(() => {
    let storedTodo = JSON.parse(localStorage.getItem("todolist"))
    if (storedTodo) {
      setTodos(storedTodo);
    }
  }, [])

  const handleAddTodo = () => {
    const newTodo = {
      title: title,
      desc: desc
    }
    const todosCopy = [...todos, newTodo]
    setTodos(todosCopy)
    localStorage.setItem('todolist', JSON.stringify(todosCopy))
  }
  const handleDeleteTodo = (key) => {
    let newTodo = [...todos];
    newTodo.splice(key);
    setTodos([...newTodo])
    console.log(todos,newTodo)

    localStorage.setItem('todolist', JSON.stringify([...newTodo]))
    console.log(todos)
  }
  return (
    <>
      <h1>My Todos</h1>
      <div className='todo-wrapper'>
        <div className='todo-input'>
          <div className='todo-list-item'>
            <label>Title</label>
            <input type='text' placeholder='What is the task Title' value={title} onChange={(e) => setTitle(e.target.value)} ref={todoTitleRef} />
          </div>
          <div className='todo-list-item'>
            <label>Description</label>
            <input type='text' placeholder='What is the task Description' value={desc} onChange={(e) => setDesc(e.target.value)} />
          </div>
          <div className='todo-list-item'>
            <button className='primaryBtn' onClick={handleAddTodo}>Add</button>
          </div>
        </div>

        <div className='btn-area'>
          <button className={`secBtn  ${isCompleteScreen === false && 'active'}`} onClick={() => setIsCompleteScreen(false)}>Todo</button>
          <button className={`secBtn   ${isCompleteScreen === true && 'active'}`} onClick={() => setIsCompleteScreen(true)}>Completed</button>
        </div>
        <div className='todo-list'>
          {todos.map((todo, index) => {
            return (<div className='todo-list-item' key={index}>
              <div className='todo-content'>
                <div className='todo-title'>
                  <h3>{todo.title}</h3>
                </div>
                <div className='todo-desc'>
                  <p>{todo.desc}</p>
                </div>
              </div>
              <div className='button-wrapper'>
                <button className='delete' onClick={() => handleDeleteTodo(index)}>Delete</button>
                <button className='completed'>Completed</button>
              </div>
            </div>)
          })}


        </div>

      </div>
    </>
  )
}

export default Todo;
