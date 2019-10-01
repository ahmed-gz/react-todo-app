import React, { useState, useEffect } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import TodoFilter from '../components/TodoFilter';
import useTodoApi from '../api/TodoAPI';
import Loader from '../components/Loader';
import { visibilityFilters } from '../utils';

const MainPage = () => {
  const [todos, isloading, isError, setTodos, setIsError, refetchTodos, createTodo, updateTodo, removeTodo] = useTodoApi([]);
  const [visibleTodos, setVisibleTodos] = useState([]);
  const [activeFilter, setActiveFilter] = useState(visibilityFilters.SHOW_ALL);

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

  const addTodo = async newTitle => {
    const newTodo = {
      title: newTitle,
      completed: false,
      userId: 1
    };

    const json = await createTodo(newTodo);
    const newId = Math.floor((Math.random() * 1000) + json.id);

    setTodos([{ ...json, id: newId }, ...todos]);
  };

  const toggleTodo = async (id, event) => {
    const todoIndex = todos.findIndex(todo => todo.id === id );
    const todo = { ...todos[todoIndex], completed: event.target.checked };

    setTodos([...todos.slice(0, todoIndex), todo, ...todos.slice(todoIndex+1)]);

    const json = await updateTodo(id, { completed: todo.completed });

    if (!json) {
      const oldTodo = { ...todo, completed: !todo.completed };

      setTodos([...todos.slice(0, todoIndex), oldTodo, ...todos.slice(todoIndex+1)]);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsError(false);
    }
  };

  const editTodo = async (id, newTitle) => {
    const oldTodos = [...todos];
    const newTodos = todos.map(todo => {
      return todo.id === id ? { ...todo, title: newTitle } : todo;
    });

    setTodos(newTodos);

    const json = await updateTodo(id, { title: newTitle });

    if (!json) {
      setTodos(oldTodos);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsError(false);
    }
  };

  const deleteTodo = async id => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const todo = todos[todoIndex];

    setTodos([...todos.slice(0, todoIndex), ...todos.slice(todoIndex+1)]);

    const json = await removeTodo(id);

    if (!json) {
      setTodos([...todos.slice(0, todoIndex), todo, ...todos.slice(todoIndex+1)]);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsError(false);
    }
  };

  console.log('App rendered');

  return (
    <div className="app">
      <ErrorBoundary>
        <TodoForm disabled={isError || isloading} onRefetch={refetchTodos} onAddTodo={title => addTodo(title)} />

        {isError && (
          <h2>Something went wrong, please try again!</h2>
        )}
        {isloading && (
          <Loader />
        )}

        <TodoList todos={visibleTodos} toggleTodo={toggleTodo} updateTodo={editTodo} deleteTodo={deleteTodo} />

        <TodoFilter disabled={isError || isloading} activeFilter={activeFilter} onFilterChange={setActiveFilter}/>
      </ErrorBoundary>
    </div>
  );
};

// export default MainPage;
export default React.memo(MainPage);
