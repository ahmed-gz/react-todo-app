import React from 'react';
import './Todo.css';

const Todo = ({ onToggle, onDelete, title, completed }) => {
  return (
    <div className="todo-item">
      <span className={completed ? 'completed' : 'active'}>{title}</span>
      <input type="checkbox" checked={completed} onChange={onToggle}/>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Todo;
