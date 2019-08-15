import React from 'react';
import styled from 'styled-components';

import { categories } from '../constants';

const Wrapper = styled.div``;
const Row = styled.div`
  margin: 1rem 0;
`;
const Input = styled.input.attrs(({ type, placeholder, min, required }) => {
  type;
  placeholder;
  min;
  required;
})`
  width: 300px;
  height: 25px;
  border: none;
  border-bottom: 1px solid gray;
  transition: all 1s;

  &:focus {
    outline: none;
    border-color: rgba(0, 0, 0, 0);
  }

  &:focus + span::before {
    width: 300px;
  }
`;

const Bar = styled.span`
  display: block;

  &::before {
    content: '';
    display: block;
    transition: all 1s;
    width: 0px;
    height: 2px;
    background: #b197fc;
  }
`;

const Select = styled.select.attrs(({ rows }) => {
  rows;
})`
  width: 300px;
  height: 35px;
  background: white;
  color: gray;
  font-size: 14px;
  border: none;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const Memo = styled.textarea.attrs(({ rows, placeholder }) => {
  rows;
  placeholder;
})`
  width: 300px;
`;

const makeCategory = () => {
  return categories.map((item, i) => (
    <option key={i} value={item}>
      {item}
    </option>
  ));
};

const NewFood = () => {
  return (
    <Wrapper>
      <h2>새 품목 등록하기</h2>
      <form>
        <Row>
          <Input type="text" placeholder="이름" />
          <Bar />
        </Row>
        <Row>
          <Input type="text" placeholder="소유자" />
          <Bar />
        </Row>
        <Row>
          <Input type="number" placeholder="보관기간" min="0" /> 일
          <Bar />
        </Row>
        <Row>
          <Select>
            <option value="" disabled selected>
              카테고리
            </option>
            {makeCategory()}
          </Select>
        </Row>
        <Row>
          <Select>
            <option value="" disabled selected>
              위치
            </option>
            <option value="냉장">냉장</option>
            <option value="냉동">냉동</option>
          </Select>
        </Row>
        <Row>
          <Memo rows={1} placeholder={'Check your memo'} />
        </Row>
        <button>확인</button>
      </form>
    </Wrapper>
  );
};

export default NewFood;
