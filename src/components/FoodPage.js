import React, { useState, useReducer } from 'react';
import styled from 'styled-components';

import FoodStore from '../store/FoodStore';
import foodReducer from '../reducer/foodReducer';

import FoodList from './FoodList';

const ContentWrapper = styled.div`
  max-width: 1080px;
  margin: 2rem;
  box-sizing: border-box;
`;

const initialState = [
  {
    id: 1,
    name: 'test',
    owner: 'jin',
    createDate: '2019-01-01',
    expireDate: '2019-01-01',
    storeDate: '2019-01-01',
    category: '빙과류',
    location: '냉동',
    memo: '매우 맛있음',
    isExpire: 'false',
    isStore: 'false'
  },
  {
    id: 2,
    name: 'test2',
    owner: 'owl',
    createDate: '2019-01-01',
    expireDate: '2019-01-01',
    storeDate: '2019-01-01',
    category: '빵',
    location: '냉장',
    memo: '아무나 먹어라',
    isExpire: 'false',
    isStore: 'false'
  }
];

const FoodPage = () => {
  const [location, setLocation] = useState('냉장');
  const [filter, setFilter] = useState('전체');
  const [foods, dispatch] = useReducer(foodReducer, initialState);

  const toggleLocation = value => {
    setLocation(value);
  };

  return (
    <>
      <ContentWrapper>
        <div>냉장/냉동</div>
        <div>filtering</div>
        <FoodList foods={foods} />
      </ContentWrapper>
    </>
  );
};

export default FoodPage;
