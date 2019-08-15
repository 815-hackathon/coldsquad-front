import React from 'react';
import { Link } from 'react-router-dom';
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
      <Navigation>
        <Link to={'/'}>List</Link>|<Link to={'/notice'}>Notice</Link>
      </Navigation>
    </Wrapper>
  );
};

export default Header;
