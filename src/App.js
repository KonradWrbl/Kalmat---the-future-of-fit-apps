import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import StartComponent from './components/startComponents/StartComponent'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import BottomMenu from './components/mainApp/BottomMenu';

const initialState = {
  gender: 'none',
  age: '',
  weight: '',
  growth: '',
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
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto';
    display: flex;
    justify-content: center;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }
`;

const MainWrapper = styled.div`
  width: 100vmin;
  height: 100vh;
`



function App() {
  return (
    <Provider store = {store}>
      <Router>
        <GlobalStyle />
        <MainWrapper>

            <Route exact path = '/' component={StartComponent}/>
            <Route path='/core' component={BottomMenu}/>

        </MainWrapper>
      </Router>
    </ Provider>
  );
}

export default App;
