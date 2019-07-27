import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import StartComponent from './components/startComponents/StartComponent'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import BottomMenu from './components/mainApp/BottomMenu';
import { connect } from 'react-redux'



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



function App(props) {
  return (
      <Router>
        <GlobalStyle />
        <MainWrapper>

            <Route exact path = '/' render={() => (props.introductionFinished === true ? (<Redirect to='/core'/>) : <StartComponent />)}/>
            <Route path='/core' component={BottomMenu}/>

        </MainWrapper>
      </Router>
  );
}

const mapStateToProps = (props) => {
  return{
      introductionFinished: props.introductionFinished
  }
}

export default connect(mapStateToProps)(App)
