import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {applyMiddleware, createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';

import reducers from './reducers';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {AUTH_USER} from './action/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const user = localStorage.getItem('token');

if (user) {
    store.dispatch({ type: AUTH_USER });
}


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
