import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    <AppContainer>
      <Header />
      <Home />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  text-align: center;
`;
