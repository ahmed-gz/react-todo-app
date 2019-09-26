import { useState, useEffect } from 'react';

const URL = 'http://www.mocky.io/v2/5d8ce55b2e0000fbcfabddc3?mocky-delay=2s';

const useTodoApi = () => {
  const [ todos, setTodos ] = useState([]);
  const [ isError, setIsError ] = useState(false);
  const [ isloading, setIsLoading ] = useState(false);

  const fetchTodos = async () => {
    console.log('fetchTodos');
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await fetch(URL);
      const json = await response.json();

      setTodos(json);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return [ todos, isloading, isError, setTodos, fetchTodos ];
}

export default useTodoApi;
