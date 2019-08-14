import React from 'react';

import Food from './Food';

const FoodList = ({ foods }) => {
  const getFoods = foods => foods.map(food => <Food key={food.id} {...food} />);

  const foodComponents = getFoods(foods);

  return <>{foodComponents}</>;
};

export default FoodList;
