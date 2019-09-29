import React, { useState, useRef } from 'react';
import './Todo.css';

const Todo = ({ onToggle, onUpdate, onDelete, title, completed }) => {
  const [ toEdit, setToEdit ] = useState(false);
  const inputEl = useRef(null);
  const saveTodo = (e) => {
    e.preventDefault();

    if (!inputEl.current.value.trim()) {
      return;
    }

    onUpdate(inputEl.current.value);
    setToEdit(false);
  };

  console.log('Todo rendered');
  return (
    <div className="todo-item">
      {toEdit ? (
        <form onSubmit={saveTodo}>
          <input type="text" ref={inputEl} defaultValue={title} />
          <input type="checkbox" checked={completed} onChange={onToggle} />
          <button type="button" onClick={onDelete}>Delete</button>
          <button type="submit">Update</button>
          <button type="button" onClick={() => setToEdit(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <span className={completed ? 'completed' : 'active'}>{title}</span>
          <input type="checkbox" checked={completed} onChange={onToggle}/>
          <button onClick={onDelete}>Delete</button>
          <button onClick={() => setToEdit(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Todo;
