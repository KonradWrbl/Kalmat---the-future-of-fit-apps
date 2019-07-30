import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import StartComponent from './components/startComponents/StartComponent'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import CoreApp from './components/coreApp/SoreApp';
import {createMuiTheme} from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#178C29' }, // Purple and green play nicely together.
    secondary: { main: '#D85C2F' }, // This is just green.A700 as hex.
    third: { main: '#02658C'},
  },
});



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
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <MainWrapper>

              <Route exact path = '/' render={() => (props.introductionFinished === true ? (<Redirect to='/core'/>) : <StartComponent />)}/>
              <Route path='/core' component={CoreApp}/>

          </MainWrapper>
        </ThemeProvider>
      </Router>
  );
}

const mapStateToProps = (props) => {
  return{
      introductionFinished: props.introductionFinished
  }
}

export default connect(mapStateToProps)(App)
