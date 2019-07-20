import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import StartComponent from './components/startComponents/StartComponent'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat';
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
    <>
      <GlobalStyle />
      <MainWrapper>
        <StartComponent />
      </MainWrapper>
    </>
  );
}

export default App;
