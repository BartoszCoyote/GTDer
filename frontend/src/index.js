import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignupPage from './components/singup/SignupPage';
import reducers from './reducers';
import App from './components/app';
import NavigationBar from './components/NavigationBar';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
    <NavigationBar />
    <Switch>
    <Route path="/signup" component={SignupPage}/>
    <Route path="/" component={App} />
    </Switch>
    </div>
    </BrowserRouter>
    </Provider>
  , document.querySelector('#app'));