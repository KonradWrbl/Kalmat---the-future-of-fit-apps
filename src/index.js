import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';

const initialState = {
    gender: 'none',
    age: '',
    weight: '',
    growth: '',
    introductionFinished: false
  }

  const reducer = (state = initialState, action) => {
    switch(action.type)  {
      case 'WEIGHT':
        return {
          ...state,
          weight: action.payload}
      case 'AGE':
        return {
          ...state,
          age: action.payload}
      case 'GROWTH':
        return {
          ...state,
          growth: action.payload}
      case 'GENDER':
        return {
          ...state,
          gender: action.payload}
      case 'FINISH':
        return {
          ...state,
          introductionFinished: action.payload}
      default:
        return state;
    }
  }

  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store = {store}><App gugu='placek'/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
