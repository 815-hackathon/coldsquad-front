import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
`;

const ContentWrapper = styled.div`
  max-width: 1080px;
  margin: 2rem;
  box-sizing: border-box;
`;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <ContentWrapper>
          <h1>hello react boiler</h1>
        </ContentWrapper>
      </>
    );
  }
}

export default App;
