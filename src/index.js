import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import mainReducer from './redux/reducers/mainReducer';

//const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = compose( window.devToolExtension ? window.devToolsExtension() : f => f)(createStore)(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(<Provider store = {store}><App gugu='placek'/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
