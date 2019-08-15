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

const Filter = styled.span`
  color: ${({ selected }) => (selected ? 'red' : 'black')};
`;

const FoodPage = () => {
  const [location, setLocation] = useState('냉장');
  const [filter, setFilter] = useState('전체');
  const [foods, dispatch] = useReducer(foodReducer, initialState);

  const toggleLocation = value => {
    setLocation(value);
  };

  const toggleFilter = value => {
    setFilter(value);
  };

  return (
    <>
      <ContentWrapper>
        <div>
          <Filter selected={location === '냉장'} onClick={() => toggleLocation('냉장')}>
            냉장
          </Filter>
          /
          <Filter selected={location === '냉동'} onClick={() => toggleLocation('냉동')}>
            냉동
          </Filter>
        </div>
        <div>
          <Filter selected={filter === '전체'} onClick={() => toggleFilter('전체')}>
            전체
          </Filter>
          /
          <Filter selected={filter === '유제품'} onClick={() => toggleFilter('유제품')}>
            유제품
          </Filter>
          /
          <Filter selected={filter === '주류'} onClick={() => toggleFilter('주류')}>
            주류
          </Filter>
          /
          <Filter selected={filter === '음료'} onClick={() => toggleFilter('음료')}>
            음료
          </Filter>
          /
          <Filter selected={filter === '빙과류'} onClick={() => toggleFilter('빙과류')}>
            빙과류
          </Filter>
          /
          <Filter selected={filter === '빵'} onClick={() => toggleFilter('빵')}>
            빵
          </Filter>
        </div>
        <FoodList foods={foods} />
      </ContentWrapper>
    </>
  );
};

export default FoodPage;
