import React, { useContext } from 'react';
import styled from 'styled-components';

import { FoodContext } from '../store/FoodStore';
import FoodList from './FoodList';

const FoodPage = () => {
  const { foods } = useContext(FoodContext);

  return (
    <>
      <div>냉장/냉동</div>
      <div>filtering</div>
      <FoodList foods={foods} />
    </>
  );
};

export default FoodPage;
