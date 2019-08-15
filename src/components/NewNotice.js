import React from 'react';
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

const NewNotice = () => {
  return (
    <Wrapper>
      <h2>새 공지 등록하기</h2>
      <form>
        <Row>
          <Input type="text" placeholder="이름" />
          <Bar />
        </Row>
        <Row>
          <Memo rows={1} placeholder={'Check your Notice'} />
        </Row>
        <button>확인</button>
      </form>
    </Wrapper>
  );
};

export default NewNotice;
