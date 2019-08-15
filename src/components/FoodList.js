import React from 'react';
import { Link } from 'react-router-dom';

import Food from './Food';

const FoodList = ({ foods }) => {
  const getFoods = foods =>
    foods.map(food => (
      <Link to={`/food/${food.id}`}>
        <Food key={food.id} {...food} />
      </Link>
    ));

  const foodComponents = getFoods(foods);

  return <>{foodComponents}</>;
};

export default FoodList;
