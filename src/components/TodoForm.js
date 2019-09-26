import React from 'react';

const TodoForm = ({ disabled, onAddTodo, onRefetch }) => {
  return (
    <form onSubmit={onAddTodo}>
      <button type="button" onClick={onRefetch} disabled={disabled}>Reload Todos</button>
      <input type="text" disabled={disabled} />
      <button type="submit" disabled={disabled}>Add Todo</button>
    </form>
  );
};

export default TodoForm;
