import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import Header from './Header';
import Foodpage from './Foodpage';
import NoticePage from './NoticePage';
import NewFood from './NewFood';
import ShowFood from './ShowFood';
import NewNotice from './NewNotice';

const GlobalStyle = createGlobalStyle`
  ${normalize}
`;

const Wrapper = styled.div`
  max-width: 1080px;
  margin: 2rem;
  box-sizing: border-box;
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Route exact path={'/'} component={Foodpage} />
        <Route exact path={'/notice'} component={NoticePage} />
        <Route exact path={'/newfood/'} component={NewFood} />
        <Route exact path={'/food/:id'} component={ShowFood} />
        <Route exact path={'/newNotice'} component={NewNotice} />
      </Wrapper>
    </Router>
  );
};

export default App;
