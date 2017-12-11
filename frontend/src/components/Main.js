import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './Home';
import SignIn from './auth/Signin';
import SignOut from './auth/Signout';
import SignUp from './auth/Singup';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import RequireAuth from './auth/Require_auth';
import NoRequireAuth from '../components/auth/No_require_auth.js';
import TestowyModal from '../components/TestowyModal';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={NoRequireAuth(Home)}/>
      <Route exact path='/signin' component={NoRequireAuth(SignIn)}/>
      <Route exact path='/signout' component={SignOut}/>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/modal' component={TestowyModal}/>
      <Route exact path='/dashboard' component={RequireAuth(Dashboard)}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </main>
);

export default Main;
