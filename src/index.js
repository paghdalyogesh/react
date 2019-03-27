import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import reducer from './reducers/myreducer'



const store = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render(<Provider store={store}>
    <App /></Provider>, document.getElementById('root'));


