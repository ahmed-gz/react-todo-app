import { useState, useEffect } from 'react';

const FETCH_TODOS_URL = 'http://www.mocky.io/v2/5d8ce55b2e0000fbcfabddc3?mocky-delay=2s';
const CREATE_TODO_URL = 'https://jsonplaceholder.typicode.com/todos';

const useTodoApi = () => {
  const [ todos, setTodos ] = useState([]);
  const [ isError, setIsError ] = useState(false);
  const [ isloading, setIsLoading ] = useState(false);

  const fetchTodos = async () => {
    console.log('fetchTodos');
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await fetch(FETCH_TODOS_URL);
      const json = await response.json();

      setTodos(json);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const createTodo = async todo => {
    try {
      const response = await fetch(CREATE_TODO_URL, {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      const json = await response.json();
      const newId = Math.floor((Math.random() * 1000) + json.id);

      setTodos([{...json, id: newId}, ...todos]);
    } catch (e) {
      console.log('Error : ', e);
    }
  };

  const updateTodo = async todo => {
    try {
      const response = await fetch(CREATE_TODO_URL, {
        method: 'PATCH',
        body: JSON.stringify(todo),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      const json = await response.json();
      const newId = Math.floor((Math.random() * 1000) + json.id);

      setTodos([{...json, id: newId}, ...todos]);
    } catch (e) {
      console.log('Error : ', e);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return [ todos, isloading, isError, setTodos, fetchTodos, createTodo ];
}

export default useTodoApi;
