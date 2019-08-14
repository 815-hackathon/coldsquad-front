import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { FoodContext } from '../store/FoodStore';
import FoodList from './FoodList';

const FoodPage = () => {
  const [location, setLocation] = useState('냉장');
  const [filter, setFilter] = useState('전체');

  const { foods } = useContext(FoodContext);

  const toggleLocation = value => {
    setLocation(value);
  };

  return (
    <>
      <div>냉장/냉동</div>
      <div>filtering</div>
      <FoodList foods={foods} />
    </>
  );
};

export default FoodPage;
