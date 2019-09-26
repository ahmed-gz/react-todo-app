import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, toggleTodo, deleteTodo}) => {
  return (
    <div className="todo-list">
      {todos.map(todo =>
        <Todo key={todo.id} {...todo} onToggle={(event) => toggleTodo(todo.id, event)} onDelete={() => deleteTodo(todo.id)}></Todo>
      )}
    </div>
  );
};

export default TodoList;
