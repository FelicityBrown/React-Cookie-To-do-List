import React, { useState } from 'react';
import './Cookiepage.css';
import TodoList from './TodoList';
import Cookie from './Cookie';

function Cookiepage() {
//  below is a React Hook
  const [todos, setTodos]  = useState([
    {name: 'Wash the dishes', checked:false},
    {name: 'Re-pot plants', checked:false},
    {name: 'Feed the cat', checked:false},
    {name: 'Walk the dog', checked:false},
    {name: 'Change the bed', checked:false},
    {name: 'Make dinner', checked:false},
    {name: 'Vacuum', checked:false},
  ])

  const handleChange = (index) => {
    let newTodos = [...todos]
    newTodos[index].checked = !newTodos[index].checked  // Exclamation mark inverts true/false value
    setTodos(newTodos)
  }

  const resetList = () => {
    let newTodos = [...todos]
    for (let todo of newTodos) {
      todo.checked = false 
    }
    setTodos(newTodos)
  }

  let step = 0
  for (let todo of todos) {
    if (todo.checked) {
      step += 1
    }
  }

  return (
    <div id="Cookiepage">
      <div className="plate">
        <Cookie step={step} />
      </div>
      <div className="refreshbutton" onClick={resetList}><img src="refresh.svg"></img></div>
      <TodoList todos={todos} onChange={handleChange} />
    </div>
  );
}

export default Cookiepage;
