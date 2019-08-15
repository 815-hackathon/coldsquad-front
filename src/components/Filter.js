import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  width: 100px;
  height: 40px;
  margin: 0px 0.5rem;
  color: ${({ selected }) => (selected ? '#fff' : '#868e96')};
  background-color: ${({ selected }) => (selected ? '#2392c0' : '#fff')};
  border: 1.5px solid #014463;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

const Filter = ({ children, selected, onClick }) => {
  return (
    <Button selected={selected} onClick={onClick}>
      <div style={{}}>{children}</div>
    </Button>
  );
};

export default Filter;
