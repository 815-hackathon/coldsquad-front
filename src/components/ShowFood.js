import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { mappingTable } from '../constants';

const Wrapper = styled.div``;
const Row = styled.div`
  margin: 1rem 0;
`;

const ShowFood = props => {
  const [food, setFood] = useState({
    _id: '',
    name: '',
    owner: '',
    expireDate: '.',
    storeDate: '.',
    category: '',
    location: '',
    memo: '',
    createdAt: '',
    updatedAt: '',
    __v: 0
  });

  const fetchData = async () => {
    const rawData = await fetch(`http://15.164.142.99:3000/food/${props.match.params.id}`);
    const jsonData = await rawData.json();
    setFood(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wrapper>
      <h2>새 품목 등록하기</h2>
      <Row>이름 : {food.name}</Row>
      <Row>소유자 : {food.owner}</Row>
      <Row>남은기간 {food.storeDuration}일</Row>
      <Row>카테고리 : {mappingTable[food.category]}</Row>
      <Row>위치 : {food.location}</Row>
      <Row>{food.memo}</Row>
      <button onClick={() => props.history.push('/')}>확인</button>
    </Wrapper>
  );
};

export default ShowFood;
