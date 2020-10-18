import React from 'react';
import ToDoItem from '../todo-item/todo-item';
import './todo-list.css';

const ToDoList = ({ tasksList, removeTask, completeTask }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted }) => (
      <ToDoItem completeTask={completeTask} removeTask={removeTask} id={id} key={id} text={text} isCompleted={isCompleted} />
    ))}
  </ul>
);
export default ToDoList;
