import React, { useState, useEffect, useRef } from 'react';
import './Todo.css';

const Todo = ({ onToggle, onUpdate, onDelete, id, title, completed }) => {
  const [ toEdit, setToEdit ] = useState(false);
  const inputEl = useRef(null);
  const saveTodo = e => {
    e.preventDefault();

    if (!inputEl.current.value.trim()) {
      return;
    }

    onUpdate(inputEl.current.value);
    setToEdit(false);
  };

  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  }, [toEdit]);

  // console.log('Todo rendered');
  return (
    <div className="todo-item">
      {toEdit ? (
        <form onSubmit={saveTodo}>
          <input data-testid="title" type="text" ref={inputEl} defaultValue={title} />
          <input data-testid="completed" type="checkbox" checked={completed} onChange={onToggle} />
          <button type="button" onClick={onDelete}>Delete</button>
          <button data-testid="submit" type="submit">Update</button>
          <button data-testid="cancel" type="button" onClick={() => setToEdit(false)}>Cancel</button>
          <a href={`/#/todo/${id}`}>View</a>
        </form>
      ) : (
        <>
          <span data-testid="title" className={completed ? 'completed' : 'active'}>{title}</span>
          <input data-testid="completed" type="checkbox" checked={completed} onChange={onToggle}/>
          <button type="button" onClick={onDelete}>Delete</button>
          <button data-testid="edit" type="button" onClick={() => setToEdit(true)}>Edit</button>
          <a href={`/#/todo/${id}`}>View</a>
        </>
      )}
    </div>
  );
};

export default Todo;
