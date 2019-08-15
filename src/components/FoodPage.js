import React, { useState, useReducer } from 'react';
import { Link, NavLink } from 'react-router-dom';

import styled from 'styled-components';

import foodReducer from '../reducer/foodReducer';

import FoodList from './FoodList';
import FoodCategory from './FoodCategory';
import Filter from './Filter';

const initialState = [
  {
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
  },
  {
    _id: 2,
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
  },
  {
    _id: 3,
    name: '콬콜라',
    owner: 'jin',
    createDate: '2019-01-01',
    expireDate: '2019-01-01',
    storeDate: '2019-01-01',
    category: '음료',
    location: '냉장',
    memo: 'ttests',
    isExpire: 'false',
    isStore: 'false'
  }
];

const FoodPage = () => {
  const [location, setLocation] = useState('냉장');
  const [category, setCategory] = useState('전체');
  const [foods, dispatch] = useReducer(foodReducer, initialState);

  const toggleLocation = value => {
    setLocation(value);
  };

  const toggleCategory = value => {
    setCategory(value);
  };

  const filteredFoods = foods =>
    foods.filter(food => {
      if (category === '전체') {
        return food.location === location;
      } else {
        return food.location === location && food.category === category;
      }
    });

  const handleClick = id => {};

  const handleRemove = (e, id) => {
    e.stoppropagation();
    console.log(id);
  };

  return (
    <>
      <Link to={'/newfood'}>
        <button>+</button>
      </Link>
      <div style={{ marginBottom: '1rem' }}>
        <Filter selected={location === '냉장'} onClick={() => toggleLocation('냉장')}>
          냉장
        </Filter>
        <Filter selected={location === '냉동'} onClick={() => toggleLocation('냉동')}>
          냉동
        </Filter>
      </div>
      <FoodCategory category={category} toggleCategory={toggleCategory} />
      <FoodList foods={filteredFoods(foods)} />
    </>
  );
};

export default FoodPage;
