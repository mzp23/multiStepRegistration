import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import Registration from '../features/registration/Registration';

const Router = () => {
  return (
    <Switch>
      <Route to="/" component={Registration} />
    </Switch>
  );
};

export default withRouter(Router);
