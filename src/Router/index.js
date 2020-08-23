import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
const Home = React.lazy(() => import('../container/Home'));
const NotFound = React.lazy(() => import('../container/NotFound'));

const AppRouter = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
export default AppRouter;
