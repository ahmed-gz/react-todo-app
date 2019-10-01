import React, { useRef } from 'react';

const TodoForm = ({ disabled, onAddTodo, onRefetch }) => {
  const inputEl = useRef(null);
  const saveTodo = e => {
    e.preventDefault();

    if (!inputEl.current.value.trim()) {
      return;
    }

    onAddTodo(inputEl.current.value);
    inputEl.current.value = '';
  };

  console.log('TodoForm rendered');
  return (
    <form onSubmit={saveTodo}>
      <button type="button" onClick={onRefetch} disabled={disabled}>Reload Todos</button>
      <input type="text" ref={inputEl} disabled={disabled} />
      <button type="submit" disabled={disabled}>Add Todo</button>
    </form>
  );
};

export default TodoForm;
