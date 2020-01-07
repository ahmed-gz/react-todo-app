import React, { useState, useEffect, useRef } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import { useStyles } from '../styles/styles';
import './Todo.css';

const Todo = ({ onToggle, onUpdate, onDelete, id, title, completed }) => {
  const [ toEdit, setToEdit ] = useState(false);
  const inputEl = useRef(null);
  const classes = useStyles();
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

  return (
    <ListItem className="todo-item">
      {toEdit ? (
        <form onSubmit={saveTodo}>
          <TextField data-testid="title" inputRef={inputEl} fullWidth defaultValue={title} className={classes.input} label="Title" multiline margin="normal" variant="outlined" />
          <Checkbox data-testid="completed" color="default" className={classes.input} value={completed} onChange={onToggle} />
          <Button variant="contained" color="secondary" className={classes.button} onClick={onDelete}>Delete</Button>
          <Button variant="contained" color="primary" className={classes.button} data-testid="submit" type="submit">Update</Button>
          <Button variant="contained" data-testid="cancel" className={classes.button} onClick={() => setToEdit(false)}>Cancel</Button>
          <Link href={`/#/todo/${id}`} className={classes.link}>View</Link>
        </form>
      ) : (
        <>
          <ListItemText data-testid="title" className={completed ? 'completed' : 'active'}>{title}</ListItemText>
          <Checkbox data-testid="completed" color="default" className={classes.input} value={completed} onChange={onToggle} />
          <Button variant="contained" color="secondary" className={classes.button} onClick={onDelete}>Delete</Button>
          <Button data-testid="edit" variant="contained" color="primary" className={classes.button} onClick={() => setToEdit(true)}>Edit</Button>
          <Link href={`/#/todo/${id}`} className={classes.link}>View</Link>
        </>
      )}
    </ListItem>
  );
};

export default Todo;
