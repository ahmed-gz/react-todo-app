import React from 'react';
import './TodoList.css';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, updateTodo, deleteTodo }) => {
  return (
    <Paper className='container todo-list'>
      <List>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            onToggle={event => toggleTodo(todo.id, event)}
            onUpdate={title => updateTodo(todo.id, title)}
            onDelete={() => deleteTodo(todo.id)}
          ></Todo>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
