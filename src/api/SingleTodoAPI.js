import { useState, useEffect } from 'react';
import { TODO_API } from 'util/config';

const useSingleTodoAPI = (id) => {
  const [todo, setTodo] = useState({});
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchTodo = async id => {
    setIsError(false);
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const response = await fetch(TODO_API + id);
      const json = await response.json();

      setTodo(json);
    } catch (e) {
      console.log('Error: ', e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodo(id);
  }, [id]);

  return [todo, isloading, isError, setTodo];
};

export default useSingleTodoAPI;
