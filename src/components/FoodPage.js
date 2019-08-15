import React, { useState, useReducer, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import styled from 'styled-components';

import foodReducer from '../reducer/foodReducer';

import FoodList from './FoodList';
import FoodCategory from './FoodCategory';
import Filter from './Filter';
import PlusButton from './PlusButton';

const initialState = [
  {
    _id: '5d54363d174bf703bcc3a3f5',
    name: 'cocacola',
    owner: 'circus',
    expireDate: '2019-08-21T16:26:37.794Z',
    storeDate: '2019-08-14T16:26:37.000Z',
    category: 'drink',
    location: '냉동고',
    memo: '마시지마',
    duration: 3,
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
    location: '냉장고',
    memo: '아무나 먹어라',
    duration: 3,
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
    location: '냉장고',
    memo: 'ttests',
    isExpire: 'false',
    duration: 3,
    isStore: 'false'
  }
];

const FoodPage = () => {
  const [location, setLocation] = useState('냉장고');
  const [category, setCategory] = useState('전체');
  const [loading, setLoading] = useState(true);
  const [foods, dispatch] = useReducer(foodReducer, initialState);

  const foodInitFn = data => dispatch({ type: 'INIT', payload: data });
  const fetchData = async () => {
    setLoading(true);
    try {
      const rawData = await fetch(url);
      const jsonData = await rawData.json();

      foodInitFn(jsonData);
      // if (isSuccess) {
      // } else {
      //   throw new Error(message);
      // }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

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
      <div style={{ marginBottom: '1rem' }}>
        <Filter selected={location === '냉장고'} onClick={() => toggleLocation('냉장고')}>
          냉장
        </Filter>
        <Filter selected={location === '냉동고'} onClick={() => toggleLocation('냉동고')}>
          냉동
        </Filter>
        <Link to={'/newfood'} style={{ float: 'right' }}>
          <PlusButton />
        </Link>
      </div>
      <FoodCategory category={category} toggleCategory={toggleCategory} />
      <FoodList foods={filteredFoods(foods)} />
    </>
  );
};

export default FoodPage;
