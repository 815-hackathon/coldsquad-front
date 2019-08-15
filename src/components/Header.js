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

const Heading = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <Wrapper>
      <Heading>
        <img style={{ width: '30px', height: '50px' }} src="../assets/Fridge.png" />
        <h1 style={{ display: 'inline-block', margin: '0 0.3rem' }}>COLDSQUAD</h1>
      </Heading>
      <Navigation>
        <StyledLink to={'/'}>List</StyledLink>
        <StyledLink to={'/notice'}>Notice</StyledLink>
      </Navigation>
    </Wrapper>
  );
};

export default Header;
