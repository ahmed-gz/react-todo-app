import React from 'react';
import Button from '@material-ui/core/Button';
import { useStyles } from '../styles/styles';
import { visibilityFilters } from '../utils';

const TodoFilter = ({disabled, activeFilter, onFilterChange}) => {
  const classes = useStyles();

  // console.log('TodoFilter rendered');
  return (
    <div className="todo-filter">
      <Button
        disabled={disabled || (activeFilter === visibilityFilters.SHOW_ALL)}
        variant="contained" className={classes.button}
        onClick={() => onFilterChange(visibilityFilters.SHOW_ALL)}
      >
        All
      </Button>
      <Button
        disabled={disabled || (activeFilter === visibilityFilters.SHOW_ACTIVE)}
        variant="contained" className={classes.button}
        onClick={() => onFilterChange(visibilityFilters.SHOW_ACTIVE)}
      >
        Active
      </Button>
      <Button
        disabled={disabled || (activeFilter === visibilityFilters.SHOW_COMPLETED)}
        variant="contained" className={classes.button}
        onClick={() => onFilterChange(visibilityFilters.SHOW_COMPLETED)}
      >
        Completed
      </Button>
    </div>
  );
};

export default TodoFilter;
