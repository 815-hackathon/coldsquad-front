import React, { useState, useReducer } from 'react';

import foodReducer from '../reducer/foodReducer';

export const FoodContext = React.createContext();

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

const FoodStore = ({ children }) => {
  const [foods, setFoods] = useReducer(foodReducer, initialState);

  return <FoodContext.Provider value={{ foods }}>{children}</FoodContext.Provider>;
};

export default FoodStore;
