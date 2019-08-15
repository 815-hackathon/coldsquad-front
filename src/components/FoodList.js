import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Food from './Food';

const FoodList = ({ foods, onClick, onRemove }) => {
  const getFoods = foods =>
    foods.map(food => (
      <NavLink to={`/food/${food._id}`}>
        <Food data-id={food._id} key={food._id} {...food} onClick={onClick} onRemove={onRemove} />
      </NavLink>
    ));

  const foodComponents = getFoods(foods);

  return <>{foodComponents}</>;
};

export default FoodList;
