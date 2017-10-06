import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = [
  thunk,
  logger,
];

import reducers from './reducers';
import App from './components/app';
import Signin from './components/auth/signin';

console.log('reducers', reducers);
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer,
  }),
  compose(
    applyMiddleware(...middlewares),
  ),
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path="/" component={App} />

        <Route path="/signin" component={Signin} />
      </div>
    </Router>
  </Provider>,
  document.querySelector('#app')
);
