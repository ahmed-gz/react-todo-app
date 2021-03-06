import React, { useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "styles/styles";

const TodoForm = ({ disabled, onAddTodo, onRefetch }) => {
  const inputEl = useRef(null);
  const classes = useStyles();
  const saveTodo = e => {
    e.preventDefault();

    if (!inputEl.current.value.trim()) {
      return;
    }

    onAddTodo(inputEl.current.value);
    inputEl.current.value = "";
  };

  return (
    <form onSubmit={saveTodo}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={3}>
          <Grid container justify="center">
            <Button
              variant="contained"
              size="large"
              color="primary"
              fullWidth
              className={classes.button}
              onClick={onRefetch}
              disabled={disabled}
            >
              Reload Todos
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container justify="center">
            <TextField
              data-testid="title"
              inputRef={inputEl}
              fullWidth
              placeholder="Todo title"
              disabled={disabled}
              className={classes.input}
              label="Title"
              multiline
              margin="normal"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container justify="center">
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              className={classes.button}
              disabled={disabled}
            >
              Add Todo
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default TodoForm;
