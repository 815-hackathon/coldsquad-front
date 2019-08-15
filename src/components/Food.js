import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  &:hover button {
    opacity: 1;
  }

  & div {
    // border: 1px solid black;
    font-size: 20px;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Name = styled.div``;
const Owner = styled.div``;
const Category = styled.div``;
const Expire = styled.div``;

const Button = styled.button`
  opacity: 0;
  background-color: transparent;
  color: red;
  border: none;

  &:active {
    outline: none;
  }

  &:hover {
    background-color: red;
    color: #fff;
  }
`;

const Thumb = styled.img`
  width: 30px;
  height: 50px;
`;

const Food = ({ id, name, owner, category, memo, expireDate, storeDuration }) => {
  return (
    <Item>
      <Row>
        <Name>
          {name} - {owner}
        </Name>
        <Category>{category}</Category>
      </Row>
      <Row>
        <Expire>남은 보관기간 : {storeDuration} 일</Expire>
        <Button>x</Button>
      </Row>
    </Item>
  );
};

export default Food;
