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

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Route exact path={'/'} component={Foodpage} />
      <Route exact path={'/notice'} component={NoticePage} />
      <Route exact path={'/newfood/'} component={NewFood} />
      <Route exact path={'/food/:id'} component={ShowFood} />
      <Route exact path={'/newNotice'} component={NewNotice} />
    </Router>
  );
};

export default App;
