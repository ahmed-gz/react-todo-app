import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import Todo from 'components/Todo';
import Loader from 'components/Loader';
import useSingleTodoAPI from 'api/SingleTodoAPI';
import { useStyles } from 'styles/styles';

const TodoPage = ({ match, history }) => {
  const [todo, isloading, isError, setTodo] = useSingleTodoAPI(match.params.id);
  const classes = useStyles();

  const toggleTodo = () => {
    setTodo({ ...todo, completed: !todo.completed });
  };

  const updateTodo = newTitle => {
    setTodo({ ...todo, title: newTitle });
  };

  const deleteTodo = () => {
    console.log('Todo deleted: ', todo.id);
  };

  return (
    <Container maxWidth="md" className="todo-page">
      <Box mx="10px" my="20px">
        {isError &&
          <Typography color="textPrimary">Something went wrong, please try again.</Typography>
        }
        {isloading ? (
          <Loader />
        ) : (
          <>
            <Paper>
              <Box my="10px" p="10px">
                <Breadcrumbs aria-label="breadcrumb">
                  <Link color="inherit" href="/" className={classes.link}>Main Page</Link>
                  <Typography color="textPrimary">Todo Page</Typography>
                </Breadcrumbs>
              </Box>
            </Paper>
            <Paper>
              <Todo
                key={todo.id}
                {...todo}
                onToggle={toggleTodo}
                onUpdate={title => updateTodo(title)}
                onDelete={deleteTodo}
              ></Todo>
            </Paper>
          </>
        )}
      </Box>
    </Container>
  );
};

export default TodoPage;
