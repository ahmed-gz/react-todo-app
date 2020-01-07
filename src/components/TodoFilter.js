import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useStyles } from "styles/styles";
import { visibilityFilters } from "util/filters";

const TodoFilter = ({ disabled, activeFilter, onFilterChange }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className="todo-filter">
      <Box mx="10px" my="20px">
        <Button
          disabled={disabled || activeFilter === visibilityFilters.SHOW_ALL}
          variant="contained"
          className={classes.button}
          onClick={() => onFilterChange(visibilityFilters.SHOW_ALL)}
        >
          All
        </Button>
        <Button
          disabled={disabled || activeFilter === visibilityFilters.SHOW_ACTIVE}
          variant="contained"
          className={classes.button}
          onClick={() => onFilterChange(visibilityFilters.SHOW_ACTIVE)}
        >
          Active
        </Button>
        <Button
          disabled={
            disabled || activeFilter === visibilityFilters.SHOW_COMPLETED
          }
          variant="contained"
          className={classes.button}
          onClick={() => onFilterChange(visibilityFilters.SHOW_COMPLETED)}
        >
          Completed
        </Button>
      </Box>
    </Container>
  );
};

export default TodoFilter;
