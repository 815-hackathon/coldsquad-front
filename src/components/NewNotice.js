import React, { useState } from 'react';
import styled from 'styled-components';
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
const Memo = styled.textarea.attrs(({ rows, placeholder }) => {
  rows;
  placeholder;
})`
  width: 300px;
`;

const NewNotice = props => {
  const [inputs, setInputs] = useState({
    name: '',
    content: ''
  });

  const handleChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = async e => {
    // e.stopPropagation();
    e.preventDefault();
    const data = await fetch('http://15.164.142.99:3000/notice', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...inputs })
    });
    const result = data.json();

    props.history.push('/notice');
  };

  return (
    <Wrapper>
      <h2>새 공지 등록하기</h2>
      <form>
        <Row>
          <Input
            value={inputs.name}
            type="text"
            placeholder="이름"
            name="name"
            onChange={e => handleChange(e)}
          />
          <Bar />
        </Row>
        <Row>
          <Memo
            value={inputs.content}
            rows={1}
            name="content"
            placeholder={'Check your Notice'}
            onChange={e => handleChange(e)}
          />
        </Row>
        <button onClick={e => handleClick(e)}>확인</button>
      </form>
    </Wrapper>
  );
};

export default NewNotice;
