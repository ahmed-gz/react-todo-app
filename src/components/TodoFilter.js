import React from 'react';
import { visibilityFilters } from '../utils';

const TodoFilter = ({disabled, activeFilter, onFilterChange}) => {

  console.log('TodoFilter rendered');
  return (
    <div className="todo-filter">
      <button
        disabled={disabled || (activeFilter === visibilityFilters.SHOW_ALL)}
        onClick={() => onFilterChange(visibilityFilters.SHOW_ALL)}
      >
        All
      </button>
      <button
        disabled={disabled || (activeFilter === visibilityFilters.SHOW_ACTIVE)}
        onClick={() => onFilterChange(visibilityFilters.SHOW_ACTIVE)}
      >
        Active
      </button>
      <button
        disabled={disabled || (activeFilter === visibilityFilters.SHOW_COMPLETED)}
        onClick={() => onFilterChange(visibilityFilters.SHOW_COMPLETED)}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;
