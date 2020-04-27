import React from 'react';
import './TodoList.css';
import TodoListItem from './TodoListItem'

function TodoList(props) {
  return (
    <div className="list">
      <h1>To-do List</h1>
      <ul>
        {
         props.todos.map((todo, index) => (
          <TodoListItem name={todo.name} index={index} checked={todo.checked} onChange={props.onChange} key={index} />
         )) 
        }
      </ul>
    </div>
  )
}

export default TodoList;
