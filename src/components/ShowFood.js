import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;
const Row = styled.div`
  margin: 1rem 0;
`;

const initData = {
  _id: '5d54363d174bf703bcc3a3f5',
  name: 'cocacola',
  owner: 'circus',
  expireDate: '2019-08-21T16:26:37.794Z',
  storeDate: '2019-08-14T16:26:37.000Z',
  category: 'drink',
  location: '냉장고',
  memo: '마시지마',
  createdAt: '2019-08-14T16:26:37.806Z',
  updatedAt: '2019-08-14T16:26:37.806Z',
  __v: 0
};

const ShowFood = ({ name, owner, location, category, memo }) => {
  return (
    <Wrapper>
      <h2>새 품목 등록하기</h2>
      <Row>이름 : {initData.name}</Row>
      <Row>소유자 : {initData.owner}</Row>
      <Row>남은기간 0일</Row>
      <Row>카테고리 : {initData.category}</Row>
      <Row>위치 : {initData.location}</Row>
      <Row>{initData.memo}</Row>
      <button>확인</button>
    </Wrapper>
  );
};

export default ShowFood;
