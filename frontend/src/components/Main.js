import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import SignIn from './auth/Signin'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/signin' component={SignIn} />
    </Switch>
  </main>
)

export default Main
