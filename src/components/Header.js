import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  margin: 0 0.3rem;
`;

const Header = () => {
  return (
    <Wrapper>
      <h1>Coldsquad</h1>
      <Navigation>
        <StyledLink to={'/'}>List</StyledLink>
        <StyledLink to={'/notice'}>Notice</StyledLink>
      </Navigation>
    </Wrapper>
  );
};

export default Header;
