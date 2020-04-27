import React from 'react';
import './TodoListItem.css';

function TodoListItem(props) {
  return (
    <li className={props.checked ? `checked` : ``} onClick={() => props.onChange(props.index)}>
      {props.name}<img src={props.checked ? `check-green.svg` : `check-grey.svg`} className="" />
    </li>
  )
}

export default TodoListItem;
