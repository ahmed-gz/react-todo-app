import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const MainPage = lazy(() => import('./pages/MainPage'));
const TodoPage = lazy(() => import('./pages/TodoPage'));

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/todo/:id" component={TodoPage} />
    </Switch>
  );
};

export default Routes;
