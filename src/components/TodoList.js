import React from 'react';
import './TodoList.css';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, updateTodo, deleteTodo }) => {
  console.log('TodoList rendered');
  return (
    <div className='todo-list'>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onToggle={event => toggleTodo(todo.id, event)}
          onUpdate={title => updateTodo(todo.id, title)}
          onDelete={() => deleteTodo(todo.id)}
        ></Todo>
      ))}
    </div>
  );
};

export default TodoList;
