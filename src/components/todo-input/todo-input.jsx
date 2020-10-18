import React from 'react';
import './todo-input.css';

const ToDoInput = ({ value, onChange, onKeyPress, onClick }) => (
  <div className="todo-input-wrapper">
      <span className="fas fa-plus" onClick={onClick}>+</span>
    <input
      className="todo-input"
      placeholder="Click to add task"
      onChange={onChange}
      value={value}
      onKeyPress={onKeyPress}
    />
  </div>
);

export default ToDoInput;
