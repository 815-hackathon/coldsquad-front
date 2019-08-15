import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 0px 0.5rem;
  color: #014463;
  background-color: #fff;
  border: 1.5px solid #014463;
  border-radius: 100%;
  font-size: 20px;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #fff;
    background-color: #2392c0;
  }
`;

const PlusButton = ({ children }) => {
  return <Button>+</Button>;
};

export default PlusButton;
