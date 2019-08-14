import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import FoodStore from '../store/FoodStore';
import Test from '../components/test';
import Header from '../components/Header';
import Foodpage from '../components/Foodpage';

const GlobalStyle = createGlobalStyle`
  ${normalize}
`;

const ContentWrapper = styled.div`
  max-width: 1080px;
  margin: 2rem;
  box-sizing: border-box;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <FoodStore>
        <ContentWrapper>
          <Header />
          <Foodpage />
        </ContentWrapper>
      </FoodStore>
    </>
  );
};

export default App;
