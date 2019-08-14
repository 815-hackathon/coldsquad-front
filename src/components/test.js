import React, { useContext } from 'react';
import { FoodContext } from '../store/FoodStore';

const test = () => {
  const { foods } = useContext(FoodContext);
  console.log(foods);
  return (
    <div>
      <h1>hello react boiler</h1>
      {foods[0].name}
    </div>
  );
};

export default test;
