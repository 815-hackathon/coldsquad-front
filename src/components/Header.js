import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Navigation = styled.div`
  display: flex;
`;

const Header = () => {
  return (
    <Wrapper>
      <h1>Coldsquad</h1>
      <Navigation>List | Notice</Navigation>
    </Wrapper>
  );
};

export default Header;
