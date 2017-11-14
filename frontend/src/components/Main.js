import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import SignIn from './auth/Signin';
import SignOut from './auth/Signout';
import SignUp from './auth/Singup';
import Dashboard from './Dashboard';
import NotFound from './NotFound';

import requireAuth from '../components/auth/Require_auth';
import noRequireAuth from '../components/auth/No_require_auth';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={noRequireAuth(Home)} />
      <Route exact path='/signin' component={noRequireAuth(SignIn)} />
      <Route exact path='/signout' component={SignOut} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/dashboard' component={requireAuth(Dashboard)} />
      <Route path="*" component={NotFound} />
    </Switch>
  </main>
);

export default Main
