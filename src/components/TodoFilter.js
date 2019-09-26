import React from 'react';

const TodoFilter = ({disabled}) => {
  return (
    <div className="todo-filter">
      <button disabled={disabled}>All</button>
      <button disabled={disabled}>Active</button>
      <button disabled={disabled}>Completed</button>
    </div>
  );
};

export default TodoFilter;
