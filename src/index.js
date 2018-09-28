import React from 'react';
import ReactDOM from 'react-dom';
import Redux, { createStore } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from '../src/reducers/index'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
