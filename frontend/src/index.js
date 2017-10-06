import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/app';
import Signin from './components/auth/signin';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        
        <Route exact path="/" component={App} />
        
        <Route path="/signin" component={Signin} />
      
      </div> 
  </BrowserRouter>
    </Provider>
  , document.querySelector('#app'));