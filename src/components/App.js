import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import useTodoApi from '../api/TodoAPI';
import { visibilityFilters } from '../utils';

const App = () => {
  const [ todos, isloading, isError, setTodos, refetchTodos, createTodo ] = useTodoApi([]);
  const [ visibleTodos, setVisibleTodos ] = useState([]);
  const [ activeFilter, setActiveFilter ] = useState(visibilityFilters.SHOW_ALL);

  useEffect(() => {
    const filteredTodos = todos.filter(todo => {
      return activeFilter === visibilityFilters.SHOW_COMPLETED
        ? todo.completed
        : activeFilter === visibilityFilters.SHOW_ACTIVE
        ? !todo.completed
        : true;
    });

    setVisibleTodos(filteredTodos);
  }, [todos, activeFilter]);

  const addTodo = (event) => {
    event.preventDefault();

    if (!event.target.todoTitle.value.trim()) {
      return;
    }

    const newTodo = {
      title: event.target.todoTitle.value,
      completed: false,
      userId: 1
    };

    createTodo(newTodo);
    event.target.todoTitle.value = '';
  };

  const toggleTodo = (id, event) => {
    const todoIndex = todos.findIndex(todo => todo.id === id );
    const todo = {...todos[todoIndex], completed: event.target.checked};

    setTodos([...todos.slice(0, todoIndex), todo, ...todos.slice(todoIndex+1)]);
  };

  const updateTodo = (id, newTitle) => {
    const newTodos = todos.map(todo => {
      return todo.id === id ? {...todo, title: newTitle} : todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = id => {
    const todoIndex = todos.findIndex(todo => todo.id === id);

    setTodos([...todos.slice(0, todoIndex), ...todos.slice(todoIndex+1)]);
  };

  console.log('App rendered');

  return (
    <div className="app">
      <TodoForm disabled={isError || isloading} onRefetch={refetchTodos} onAddTodo={(event) => addTodo(event)} />
      {isError ? (
        <p>Something went wrong, please try again!</p>
      ) : isloading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todos={visibleTodos} toggleTodo={toggleTodo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      )}
      <TodoFilter disabled={isError || isloading} activeFilter={activeFilter} onFilterChange={setActiveFilter}/>
    </div>
  );
}

// export default App;
export default React.memo(App);
