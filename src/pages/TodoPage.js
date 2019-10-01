import React from 'react';

import Todo from '../components/Todo';
import Loader from '../components/Loader';
import useSingleTodoAPI from '../api/SingleTodoAPI';

const TodoPage = ({ match, history }) => {
  const [todo, isloading, isError, setTodo] = useSingleTodoAPI(match.params.id);

  const toggleTodo = () => {
    setTodo({ ...todo, completed: !todo.completed });
  };

  const updateTodo = newTitle => {
    setTodo({ ...todo, title: newTitle });
  };

  return (
    <div className="todo-page">
      {isError &&
        <h2>Something went wrong, please try again.</h2>
      }
      {isloading ? (
        <Loader />
      ) : (
        <>
          <button type="button" onClick={history.goBack}>Main Page</button>
          <Todo
            key={todo.id}
            {...todo}
            onToggle={toggleTodo}
            onUpdate={title => updateTodo(title)}
            onDelete={() => console.log('Todo deleted: ', todo.id)}
          ></Todo>
        </>
      )}
    </div>
  );
};

export default TodoPage;
