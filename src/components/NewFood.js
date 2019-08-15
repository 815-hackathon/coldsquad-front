import React, { useState } from 'react';
import styled from 'styled-components';

import { categories, mappingTable } from '../constants';

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
    background: #bae3e0;
  }
`;

const Select = styled.select.attrs(({ rows, value }) => {
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
      {mappingTable[item]}
    </option>
  ));
};

const NewFood = props => {
  const [inputs, setInput] = useState({
    text: '',
    owner: '',
    storeDuration: '',
    category: '',
    location: '',
    expireDate: '',
    memo: ''
  });

  const handleChange = e => {
    setInput({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = async e => {
    e.preventDefault();
    const data = await fetch('http://15.164.142.99:3000/food', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...inputs })
    });
    const result = data.json();

    // props.
  };
  return (
    <Wrapper>
      <h2>새 품목 등록하기</h2>
      <form>
        <Row>
          <Input
            name="name"
            type="text"
            placeholder="이름"
            value={inputs.name || ''}
            onChange={e => handleChange(e)}
          />
          <Bar />
        </Row>
        <Row>
          <Input
            name="owner"
            type="text"
            placeholder="소유자"
            value={inputs.owner || ''}
            onChange={e => handleChange(e)}
          />
          <Bar />
        </Row>
        <Row>
          <Input
            name="storeDuration"
            type="number"
            placeholder="보관기간"
            min="0"
            value={inputs.storeDuration || ''}
            onChange={e => handleChange(e)}
          />{' '}
          일
          <Bar />
        </Row>
        <Row>
          <Select name="category" value={inputs.category} onChange={e => handleChange(e)}>
            <option value="" disabled>
              카테고리
            </option>
            {makeCategory()}
          </Select>
        </Row>
        <Row>
          <Select name="location" value={inputs.location || ''} onChange={e => handleChange(e)}>
            <option value="" disabled>
              위치
            </option>
            <option value="냉장고">냉장고</option>
            <option value="냉동고">냉동고</option>
          </Select>
        </Row>
        <Row>
          <Input
            name="expireDate"
            type="date"
            placeholder="유통기한"
            value={inputs.expireDate || ''}
            onChange={e => handleChange(e)}
          />
          <Bar />
        </Row>
        <Row>
          <Memo
            name="memo"
            rows={1}
            placeholder={'Check your memo'}
            value={inputs.memo || ''}
            onChange={e => handleChange(e)}
          />
        </Row>
        <button onClick={e => handleClick(e)}>확인</button>
      </form>
    </Wrapper>
  );
};

export default NewFood;
