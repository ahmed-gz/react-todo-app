import React from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import useTodoApi from '../api/TodoAPI';

const App = () => {
  const [ todos, isloading, isError, setTodos, refetchTodos ] = useTodoApi([]);

  const addTodo = (event) => {
    const newTodo = {
      title: event.target.value,
      completed: false
    };

    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id, event) => {
    const newTodos = todos.map(todo => {
      return todo.id === id ? {...todo, completed: event.target.checked} : todo;
    });

    setTodos(newTodos);
  };

  const deleteTodo = id => {
    const todoIndex = todos.findIndex(todo => todo.id === id);

    setTodos([...todos.slice(0, todoIndex), ...todos.slice(todoIndex+1)])
  };

  return (
    <div className="app">
      <TodoForm disabled={isError || isloading} onRefetch={refetchTodos} onAddTodo={(event) => addTodo(event)} />
      {isError ? (
        <p>Something went wrong, please try again!</p>
      ) : isloading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      )}
      <TodoFilter disabled={isError || isloading} />
    </div>
  );
}

export default App;
