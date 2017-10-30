import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import SignIn from './auth/Signin'
import SignOut from './auth/Signout';
import Dashboard from './Dashboard';
import NotFound from './NotFound';

import requireAuth from '../components/auth/Require_auth';
import norequireAuth from '../components/auth/No_require_auth';



const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={norequireAuth(Home)} />
      <Route exact path='/signin' component={norequireAuth(SignIn)} />
      <Route exact path='/signout' component={SignOut} />
      <Route exact path='/dashboard' component={requireAuth(Dashboard)} />
      <Route path="*" component={NotFound} />
    </Switch>
  </main>
)

export default Main
