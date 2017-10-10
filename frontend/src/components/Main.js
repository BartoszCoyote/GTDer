import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import SignIn from './auth/Signin'
import SignOut from './auth/signout';
import Dashboard from './Dashboard';

import requireAuth from '../components/auth/require_auth';
import norequireAuth from '../components/auth/no_require_auth';



const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={norequireAuth(Home)} />
      <Route exact path='/signin' component={SignIn} />
      <Route exact path='/signout' component={SignOut} />
      <Route exact path='/dashboard' component={requireAuth(Dashboard)} />
    </Switch>
  </main>
)

export default Main
