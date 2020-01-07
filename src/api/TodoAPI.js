import { useState, useEffect } from "react";
import { FETCH_TODOS_URL, SAVE_TODO_URL } from "util/config";

const useTodoApi = () => {
  const [todos, setTodos] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const fetchTodos = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await fetch(FETCH_TODOS_URL);
      const json = await response.json();

      setTodos(json);
    } catch (e) {
      console.log("Error: ", e);

      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const createTodo = async todo => {
    try {
      const response = await fetch(SAVE_TODO_URL, {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      const json = await response.json();

      return json;
    } catch (e) {
      console.log("Error : ", e);
      setIsError(true);

      return false;
    }
  };

  const updateTodo = async (id, todo) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const response = await fetch(SAVE_TODO_URL + id, {
        method: "PATCH",
        body: JSON.stringify(todo),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      const json = await response.json();

      return json;
    } catch (e) {
      console.log("Error : ", e);
      setIsError(true);

      return false;
    }
  };

  const removeTodo = async id => {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const response = await fetch(SAVE_TODO_URL + id, {
        method: "DELETE"
      });
      const json = await response.json();

      return json;
    } catch (e) {
      console.log("Error:", e);
      setIsError(true);

      return false;
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return [
    todos,
    isloading,
    isError,
    setTodos,
    setIsError,
    fetchTodos,
    createTodo,
    updateTodo,
    removeTodo
  ];
};

export default useTodoApi;
