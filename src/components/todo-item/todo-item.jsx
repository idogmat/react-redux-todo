import React from 'react';
import './todo-item.css';

const ToDoItem = ({ text, isCompleted, removeTask, id, completeTask }) => (
  <li className="todo-item">
    <span onClick={() => completeTask(id)} className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
    <span onClick={() => removeTask(id)} className="fas fa-times" >+</span>
  </li>
);
export default ToDoItem;
